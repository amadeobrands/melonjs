import path from 'path';
import { ethers } from 'ethers';
import {
  Node,
  Project,
  ParameterDeclarationStructure,
  ImportDeclarationStructure,
  ExportDeclarationStructure,
  StatementStructures,
} from 'ts-morph';
import { contractClassStructure, contractBinStructure } from './templates';

function prettifyText(node: Node, format: (source: string) => string) {
  const text = node.getText({ includeJsDocComments: true });
  return format(text);
}

function getInputs(fragment: ethers.utils.FunctionFragment) {
  const inputs: Array<string> = [];
  fragment.inputs.forEach((input, index) => {
    const name = input.name || `$$${index}`;
    const type = getType(input, true);
    inputs.push(`${name}: ${type}`);
  });

  return inputs;
}

function getOutput(fragment: ethers.utils.FunctionFragment) {
  if (!fragment.outputs.length) {
    return 'void';
  }

  if (fragment.outputs.length === 1) {
    return getType(fragment.outputs[0]);
  }

  // If all output parameters are named and unique, we can specify the struct.
  const struct = fragment.outputs.every((item, index, array) => {
    return !!item.name && array.findIndex((inner) => inner.name === item.name) === index;
  });

  if (struct) {
    return `{ ${fragment.outputs.map((o) => `${o.name}: ${getType(o)}`).join(', ')} }`;
  }

  // Otherwise, all we know is that it will be an Array.
  return 'any[]';
}

function getOverrides(fragment: ethers.utils.FunctionFragment) {
  if (fragment.constant) {
    return 'ethers.CallOverrides';
  }

  if (fragment.payable) {
    return 'ethers.PayableOverrides';
  }

  return 'ethers.Overrides';
}

function getType(param: ethers.utils.ParamType, flexible?: boolean): string {
  if (param.type === 'address') {
    return 'AddressLike';
  }

  if (param.type === 'string') {
    return 'string';
  }

  if (param.type === 'bool') {
    return 'boolean';
  }

  if (param.type.substring(0, 5) === 'bytes') {
    if (flexible) {
      return 'string | ethers.utils.BytesLike';
    }

    return 'string';
  }

  const matches = param.type.match(/^u?int([0-9]+)$/);
  if (matches) {
    if (flexible) {
      return 'ethers.BigNumberish';
    }

    if (parseInt(matches[1]) < 53) {
      return 'number';
    }

    return 'ethers.BigNumber';
  }

  if (param.type === 'array' || param.type.substr(-1) === ']') {
    const matches = param.type.match(/\[([0-9]*)\]$/);
    if (matches && matches[1]) {
      const type = getType(param.arrayChildren);
      const list = Array.from(Array(parseInt(matches[1], 10)).keys())
        .map(() => type)
        .join(', ');

      return `[${list}]`;
    }

    return `${getType(param.arrayChildren)}[]`;
  }

  if (param.type === 'tuple') {
    const struct = param.components.map((p, i) => `${p.name || `$$${i}`}: ${getType(p, flexible)}`);
    return `{ ${struct.join(', ')} }`;
  }

  return 'any';
}

export interface NatspecDevdoc {
  notice?: string;
  methods?: {
    [key: string]: {
      notice?: string;
    };
  };
}

export interface NatspecUserdoc {
  title?: string;
  author?: string;
  methods?: {
    [key: string]: {
      details?: string;
      params?: {
        [key: string]: string;
      };
      returns?: {
        [key: string]: string;
      };
    };
  };
}

export interface ContractData {
  name: string;
  destination: string;
  bytecode: string;
  interface: ethers.utils.Interface;
  devdoc?: NatspecDevdoc;
  userdoc?: NatspecUserdoc;
}

export function generate(
  project: Project,
  output: string,
  mapping: ContractData[],
  format: (source: string) => string,
) {
  mapping.forEach((contract) => {
    generateContractFile(project, output, contract, format);
    generateBytecodeFile(project, output, contract, format);
  });

  const exportsFilePath = path.join(output, `index.ts`);
  const exportsFile = project.createSourceFile(exportsFilePath, undefined, {
    overwrite: true,
  });

  const exportStatements = mapping
    .map((item) => {
      const contractFilePath = path.resolve(path.join(output, item.destination));
      const relativePath = path.relative(path.dirname(exportsFilePath), contractFilePath);
      const contractExport = `export { ${item.name} } from './${relativePath}'`;
      const byteCodeExport = `export { deploy${item.name}, ${item.name}Bytecode } from './${relativePath}.bin'`;
      return [contractExport, byteCodeExport];
    })
    .flat();

  exportsFile.addStatements(exportStatements);
  exportsFile.fixUnusedIdentifiers().fixMissingImports();
  exportsFile.replaceWithText(prettifyText(exportsFile, format));
}

function generateContractFile(
  project: Project,
  output: string,
  data: ContractData,
  format: (source: string) => string,
) {
  const destination = path.resolve(path.join(output, data.destination));
  const root = path.resolve(path.resolve(__dirname, '..', '..', 'src'));
  const relative = path.relative(path.dirname(destination), root);
  const signatures = Object.keys(data.interface.functions);
  const functions = signatures.map((signature) => {
    const fragment = data.interface.functions[signature];

    return {
      fragment,
      signature,
      userdoc: data.userdoc?.methods?.[signature] ?? undefined,
      devdoc: data.devdoc?.methods?.[signature] ?? undefined,
      output: getOutput(fragment),
      inputs: getInputs(fragment),
      overrides: getOverrides(fragment),
      full: fragment.format(ethers.utils.FormatTypes.full),
      minimal: fragment.format(ethers.utils.FormatTypes.minimal),
    };
  });

  const uniques = functions.filter((item, index, array) => {
    return index === array.findIndex((candidate) => candidate.fragment.name === item.fragment.name);
  });

  const calls = uniques.filter((item) => item.fragment.constant);
  const transactions = uniques.filter((item) => !item.fragment.constant);

  const contractFile = project.createSourceFile(`${destination}.ts`, contractClassStructure, {
    overwrite: true,
  });

  contractFile.addImportDeclaration({
    namedImports: ['Contract', 'TransactionWrapper'],
    moduleSpecifier: `./${relative}`,
  });

  const contractClass = contractFile.getClassOrThrow('MyContract').rename(data.name);
  const contractDocs = contractClass.addJsDoc({
    description: data.devdoc.notice || undefined,
    tags: [
      {
        tagName: 'title',
        text: data.userdoc?.title || undefined,
      },
      {
        tagName: 'author',
        text: data.userdoc?.author || undefined,
      },
    ].filter((item) => !!item.text),
  });

  if (!contractDocs.getInnerText()) {
    contractDocs.remove();
  }

  contractClass.getPropertyOrThrow('abi').setInitializer((writer) => {
    writer.writeLine('[');

    data.interface.fragments.forEach((fragment) => {
      writer.writeLine(`'${fragment.format(ethers.utils.FormatTypes.full)}',`);
    });

    writer.writeLine(']');
  });

  const constructorFragment = data.interface.fragments.find((fragment) => {
    return ethers.utils.FunctionFragment.isConstructorFragment(fragment);
  });

  const constructorArgs = constructorFragment?.inputs.map((item) => item.name) ?? [];
  const constructorInputs = constructorFragment?.inputs.map((item) => ({
    name: item.name,
    type: getType(item),
  })) as ParameterDeclarationStructure[];

  const deployMethod = contractClass.getMethodOrThrow('deploy');
  deployMethod.addParameters(constructorInputs ?? []);
  const deployArgs = constructorArgs.length ? `, [${constructorArgs.join(', ')}]` : '';
  deployMethod.addStatements([`return new DeploymentTransactionWrapper(this, bytecode, signer${deployArgs})`]);

  calls.forEach((item) => {
    const inputs = item.inputs.concat([`$$overrides?: ${item.overrides}`]).join(', ');
    const callDeclaration = contractClass.addProperty({
      name: item.fragment.name,
      type: `(${inputs}) => Promise<${item.output}>`,
    });

    const callDocs = callDeclaration.addJsDoc({
      description: (write) => {
        write.conditionalWriteLine(!!item.devdoc?.notice, item.devdoc?.notice);
        write.conditionalBlankLine(!!item.devdoc?.notice && !!item.userdoc?.details);
        write.conditionalWriteLine(!!item.userdoc?.details, item.userdoc?.details);
        write.conditionalBlankLine(!!item.devdoc?.notice || !!item.userdoc?.details);

        write.writeLine('```solidity');
        write.writeLine(item.minimal);
        write.writeLine('```');
      },
    });

    const params = Object.entries(item.userdoc?.params ?? {});
    callDocs.addTags(
      params.map(([key, value]) => ({
        tagName: 'param',
        text: `${key} ${value}`,
      })),
    );

    const returns = Object.entries(item.userdoc?.returns ?? {});
    if (returns.length) {
      callDocs.addTag({
        tagName: 'returns',
        text: (writer) => {
          returns.forEach(([key, value]) => {
            if (returns.length === 1) {
              writer.writeLine(value);
            } else {
              writer.writeLine(`- \`${key}\` — ${value}`);
            }
          });
        },
      });
    }
  });

  transactions.forEach((item) => {
    const inputs = item.inputs.join(', ');
    const transactionDeclaration = contractClass.addProperty({
      name: item.fragment.name,
      type: `(${inputs}) => TransactionWrapper<${item.overrides}>`,
    });

    const transactionDocs = transactionDeclaration.addJsDoc({
      description: (write) => {
        write.conditionalWriteLine(!!item.devdoc?.notice, item.devdoc?.notice);
        write.conditionalBlankLine(!!item.devdoc?.notice && !!item.userdoc?.details);
        write.conditionalWriteLine(!!item.userdoc?.details, item.userdoc?.details);
        write.conditionalBlankLine(!!item.devdoc?.notice || !!item.userdoc?.details);

        write.writeLine('```solidity');
        write.writeLine(item.minimal);
        write.writeLine('```');
      },
    });

    const params = Object.entries(item.userdoc?.params ?? {});
    transactionDocs.addTags(
      params.map(([key, value]) => ({
        tagName: 'param',
        text: `${key} ${value}`,
      })),
    );

    const returns = Object.entries(item.userdoc?.returns ?? {});
    if (returns.length) {
      transactionDocs.addTag({
        tagName: 'returns',
        text: (writer) => {
          returns.forEach(([key, value]) => {
            if (returns.length === 1) {
              writer.writeLine(value);
            } else {
              writer.writeLine(`- \`${key}\` — ${value}`);
            }
          });
        },
      });
    }
  });

  contractFile.fixUnusedIdentifiers().fixMissingImports();
  contractFile.replaceWithText(prettifyText(contractFile, format));

  return contractFile;
}

function generateBytecodeFile(
  project: Project,
  output: string,
  data: ContractData,
  format: (source: string) => string,
) {
  const destination = path.resolve(path.join(output, data.destination));
  const byteCodeFile = project.createSourceFile(`${destination}.bin.ts`, contractBinStructure, {
    overwrite: true,
  });

  byteCodeFile.addImportDeclaration({
    moduleSpecifier: `./${data.name}`,
    namedImports: [data.name],
  });

  const byteCodeExport = byteCodeFile.getVariableDeclarationOrThrow('MyContractBytecode');
  byteCodeExport.rename(`${data.name}Bytecode`);
  byteCodeExport.setInitializer(`'${data.bytecode}'`);

  const constructorFragment = data.interface.deploy;
  const constructorArgs = constructorFragment?.inputs.map((item) => item.name) ?? [];
  const constructorInputs = constructorFragment?.inputs.map((item) => ({
    name: item.name,
    type: getType(item),
  })) as ParameterDeclarationStructure[];

  const deployFn = byteCodeFile.getFunctionOrThrow('deployMyContract');
  deployFn.rename(`deploy${data.name}`);
  deployFn.addStatements([]);
  deployFn.addParameters(constructorInputs ?? []);

  const deployArgs = constructorArgs.length ? `, ${constructorArgs.join(', ')}` : '';
  deployFn.addStatements([`return ${data.name}.deploy(${data.name}Bytecode, signer${deployArgs})`]);

  byteCodeFile.fixUnusedIdentifiers().fixMissingImports();
  byteCodeFile.replaceWithText(prettifyText(byteCodeFile, format));
}
import { ethers } from 'ethers';

function getInputs(fragment: ethers.utils.FunctionFragment) {
  let inputs: Array<string> = [];
  fragment.inputs.forEach((input, index) => {
    let name = input.name || `$$${index}`;
    let type = getType(input, true);
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
  if (param.type === 'address' || param.type === 'string') {
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

export function generate(name: string, $contract: ethers.ContractInterface): string {
  const contract = ethers.utils.Interface.isInterface($contract) ? $contract : new ethers.utils.Interface($contract);
  const abis = contract.fragments.map((fragment) => `"${fragment.format(ethers.utils.FormatTypes.full)}"`);

  const signatures = Object.keys(contract.functions);
  const functions = signatures.map((signature) => {
    const fragment = contract.functions[signature];

    return {
      fragment,
      signature,
      contract: name,
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

  const body: string[] = [];
  const fields: { [key: string]: string[] } = {
    root: [],
    call: [],
    estimate: [],
    populate: [],
  };

  calls.forEach((item) => {
    const params = item.inputs.concat([`$$overrides?: ${item.overrides}`]).join(', ');
    fields.root.push(`'${item.signature}': (${params}) => Promise<${item.output}>;`);
    fields.call.push(`'${item.signature}': (${params}) => Promise<${item.output}>;`);

    body.push(`
      /**
       * \`${item.contract}\` contract call for the \`${item.fragment.name}\` function.
       *
       * @contract ${item.contract}
       * @signature ${item.signature}
       * @method ${item.minimal}
       */
      ${item.fragment.name}: (${params}) => Promise<${item.output}>;
    `);
  });

  transactions.forEach((item) => {
    const params = item.inputs.concat([`$$overrides?: ${item.overrides}`]).join(', ');
    fields.root.push(`'${item.signature}': (${params}) => ethers.providers.TransactionResponse;`);
    fields.call.push(`'${item.signature}': (${params}) => Promise<${item.output}>;`);
    fields.estimate.push(`'${item.signature}': (${params}) => Promise<ethers.BigNumber>;`);
    fields.populate.push(`'${item.signature}': (${params}) => Promise<ethers.UnsignedTransaction>;`);

    body.push(`
      /**
       * \`${item.contract}\` contract transaction for \`${item.fragment.name}\` function.
       *
       * @contract ${name}
       * @signature ${item.signature}
       * @method ${item.minimal}
       */
      ${item.fragment.name}: (${item.inputs.join(', ')}) => TransactionWrapper<${item.overrides}>
    `);
  });

  return `
    import { ethers } from "ethers";
    // @ts-ignore
    import { Contract, TransactionWrapper } from "../Contract";

    export class ${name} extends Contract {
      public readonly ethers: ${name}EthersContract;

      constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
        super(new.target.abi, addressOrName, providerOrSigner);
      }

      ${body.join('\n\n')}

      static abi: string[] = [
        ${abis.join(',\n')}
      ];
    }

    export interface ${name}EthersContract extends ethers.Contract {
      ${fields.root.join('\n')}

      callStatic: {
        ${fields.call.join('\n')}
      };

      estimateGas: {
        ${fields.estimate.join('\n')}
      };

      populateTransaction: {
        ${fields.populate.join('\n')}
      };
    }
  `;
}

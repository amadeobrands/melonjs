import { ethers } from 'ethers';
import { Contract, TransactionWrapper, DeploymentTransactionWrapper, AddressLike } from './../..';

export class MaxConcentration extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
    'constructor(uint256 _maxConcentration)',
    'function MAKE_ORDER() view returns (bytes4)',
    'function TAKE_ORDER() view returns (bytes4)',
    'function identifier() pure returns (string)',
    'function maxConcentration() view returns (uint256)',
    'function position() pure returns (uint8)',
    'function rule(bytes4 sig, address[5] addresses, uint256[3] values, bytes32 identifier) returns (bool)',
  ];

  /**
   * Deploy a new contract instance.
   *
   * @param bytecode The bytecode to deploy the contract with.
   * @param signer The ethers.js signer instance to use.
   */
  public static deploy(bytecode: string, signer: ethers.Signer, _maxConcentration: ethers.BigNumber) {
    return new DeploymentTransactionWrapper(this, bytecode, signer, [_maxConcentration]);
  }

  /**
   * ```solidity
   * function MAKE_ORDER() view returns (bytes4)
   * ```
   *
   */
  MAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function TAKE_ORDER() view returns (bytes4)
   * ```
   *
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function identifier() pure returns (string)
   * ```
   *
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function maxConcentration() view returns (uint256)
   * ```
   *
   */
  maxConcentration: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  /**
   * ```solidity
   * function position() pure returns (uint8)
   * ```
   *
   */
  position: ($$overrides?: ethers.CallOverrides) => Promise<number>;
  /**
   * ```solidity
   * function rule(bytes4,address[5],uint256[3],bytes32) returns (bool)
   * ```
   *
   */
  rule: (
    sig: string | ethers.utils.BytesLike,
    addresses: [AddressLike, AddressLike, AddressLike, AddressLike, AddressLike],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;
}
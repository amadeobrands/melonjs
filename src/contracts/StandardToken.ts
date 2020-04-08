import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class StandardToken extends Contract {
  public readonly ethers: StandardTokenEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `StandardToken` contract call for the `allowance` function.
   *
   * @contract StandardToken
   * @signature allowance(address,address)
   * @method function allowance(address,address) view returns (uint256)
   */
  allowance: (_owner: string, _spender: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `StandardToken` contract call for the `balanceOf` function.
   *
   * @contract StandardToken
   * @signature balanceOf(address)
   * @method function balanceOf(address) view returns (uint256)
   */
  balanceOf: (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `StandardToken` contract call for the `totalSupply` function.
   *
   * @contract StandardToken
   * @signature totalSupply()
   * @method function totalSupply() view returns (uint256)
   */
  totalSupply: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `StandardToken` contract transaction for `approve` function.
   *
   * @contract StandardToken
   * @signature approve(address,uint256)
   * @method function approve(address,uint256) returns (bool)
   */
  approve: (_spender: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `StandardToken` contract transaction for `decreaseApproval` function.
   *
   * @contract StandardToken
   * @signature decreaseApproval(address,uint256)
   * @method function decreaseApproval(address,uint256) returns (bool)
   */
  decreaseApproval: (_spender: string, _subtractedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `StandardToken` contract transaction for `increaseApproval` function.
   *
   * @contract StandardToken
   * @signature increaseApproval(address,uint256)
   * @method function increaseApproval(address,uint256) returns (bool)
   */
  increaseApproval: (_spender: string, _addedValue: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `StandardToken` contract transaction for `transfer` function.
   *
   * @contract StandardToken
   * @signature transfer(address,uint256)
   * @method function transfer(address,uint256) returns (bool)
   */
  transfer: (_to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `StandardToken` contract transaction for `transferFrom` function.
   *
   * @contract StandardToken
   * @signature transferFrom(address,address,uint256)
   * @method function transferFrom(address,address,uint256) returns (bool)
   */
  transferFrom: (_from: string, _to: string, _value: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    'function approve(address _spender, uint256 _value) returns (bool)',
    'function balanceOf(address _owner) view returns (uint256)',
    'function decreaseApproval(address _spender, uint256 _subtractedValue) returns (bool)',
    'function increaseApproval(address _spender, uint256 _addedValue) returns (bool)',
    'function totalSupply() view returns (uint256)',
    'function transfer(address _to, uint256 _value) returns (bool)',
    'function transferFrom(address _from, address _to, uint256 _value) returns (bool)',
  ];
}

export interface StandardTokenEthersContract extends ethers.Contract {
  'allowance(address,address)': (
    _owner: string,
    _spender: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'approve(address,uint256)': (
    _spender: string,
    _value: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'decreaseApproval(address,uint256)': (
    _spender: string,
    _subtractedValue: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'increaseApproval(address,uint256)': (
    _spender: string,
    _addedValue: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transfer(address,uint256)': (
    _to: string,
    _value: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'transferFrom(address,address,uint256)': (
    _from: string,
    _to: string,
    _value: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'allowance(address,address)': (
      _owner: string,
      _spender: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'decreaseApproval(address,uint256)': (
      _spender: string,
      _subtractedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'increaseApproval(address,uint256)': (
      _spender: string,
      _addedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'allowance(address,address)': (
      _owner: string,
      _spender: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'balanceOf(address)': (_owner: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'totalSupply()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'decreaseApproval(address,uint256)': (
      _spender: string,
      _subtractedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'increaseApproval(address,uint256)': (
      _spender: string,
      _addedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'decreaseApproval(address,uint256)': (
      _spender: string,
      _subtractedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'increaseApproval(address,uint256)': (
      _spender: string,
      _addedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'approve(address,uint256)': (
      _spender: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'decreaseApproval(address,uint256)': (
      _spender: string,
      _subtractedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'increaseApproval(address,uint256)': (
      _spender: string,
      _addedValue: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transfer(address,uint256)': (
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'transferFrom(address,address,uint256)': (
      _from: string,
      _to: string,
      _value: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}

import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class AddressList extends Contract {
  public readonly ethers: AddressListEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `AddressList` contract call for the `authority` function.
   *
   * @contract AddressList
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AddressList` contract call for the `getMemberCount` function.
   *
   * @contract AddressList
   * @signature getMemberCount()
   * @method function getMemberCount() view returns (uint256)
   */
  getMemberCount: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `AddressList` contract call for the `getMembers` function.
   *
   * @contract AddressList
   * @signature getMembers()
   * @method function getMembers() view returns (address[])
   */
  getMembers: ($$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `AddressList` contract call for the `isMember` function.
   *
   * @contract AddressList
   * @signature isMember(address)
   * @method function isMember(address) view returns (bool)
   */
  isMember: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `AddressList` contract call for the `owner` function.
   *
   * @contract AddressList
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AddressList` contract transaction for `setAuthority` function.
   *
   * @contract AddressList
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `AddressList` contract transaction for `setOwner` function.
   *
   * @contract AddressList
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address[] _assets)',
    'event ListAddition(address[] ones)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function authority() view returns (address)',
    'function getMemberCount() view returns (uint256)',
    'function getMembers() view returns (address[])',
    'function isMember(address _asset) view returns (bool)',
    'function owner() view returns (address)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
  ];
}

export interface AddressListEthersContract extends ethers.Contract {
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getMemberCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getMembers()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'isMember(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'setAuthority(address)': (
    authority_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setOwner(address)': (
    owner_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getMemberCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getMembers()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'isMember(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setOwner(address)': (
      owner_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getMemberCount()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getMembers()': ($$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'isMember(address)': (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}

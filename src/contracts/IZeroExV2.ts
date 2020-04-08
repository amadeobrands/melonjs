import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IZeroExV2 extends Contract {
  public readonly ethers: IZeroExV2EthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IZeroExV2` contract call for the `ZRX_ASSET_DATA` function.
   *
   * @contract IZeroExV2
   * @signature ZRX_ASSET_DATA()
   * @method function ZRX_ASSET_DATA() view returns (bytes)
   */
  ZRX_ASSET_DATA: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IZeroExV2` contract call for the `cancelled` function.
   *
   * @contract IZeroExV2
   * @signature cancelled(bytes32)
   * @method function cancelled(bytes32) view returns (bool)
   */
  cancelled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IZeroExV2` contract call for the `filled` function.
   *
   * @contract IZeroExV2
   * @signature filled(bytes32)
   * @method function filled(bytes32) view returns (uint256)
   */
  filled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IZeroExV2` contract call for the `getAssetProxy` function.
   *
   * @contract IZeroExV2
   * @signature getAssetProxy(bytes4)
   * @method function getAssetProxy(bytes4) view returns (address)
   */
  getAssetProxy: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IZeroExV2` contract call for the `getOrderInfo` function.
   *
   * @contract IZeroExV2
   * @signature getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
   * @method function getOrderInfo(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)) view returns (tuple(uint8,bytes32,uint256))
   */
  getOrderInfo: (
    $$0: {
      makerAddress: string;
      takerAddress: string;
      feeRecipientAddress: string;
      senderAddress: string;
      makerAssetAmount: ethers.BigNumberish;
      takerAssetAmount: ethers.BigNumberish;
      makerFee: ethers.BigNumberish;
      takerFee: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      salt: ethers.BigNumberish;
      makerAssetData: string | ethers.utils.BytesLike;
      takerAssetData: string | ethers.utils.BytesLike;
    },
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }>;

  /**
   * `IZeroExV2` contract call for the `isValidSignature` function.
   *
   * @contract IZeroExV2
   * @signature isValidSignature(bytes32,address,bytes)
   * @method function isValidSignature(bytes32,address,bytes) view returns (bool)
   */
  isValidSignature: (
    $$0: string | ethers.utils.BytesLike,
    $$1: string,
    $$2: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `IZeroExV2` contract transaction for `cancelOrder` function.
   *
   * @contract IZeroExV2
   * @signature cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
   * @method function cancelOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
   */
  cancelOrder: ($$0: {
    makerAddress: string;
    takerAddress: string;
    feeRecipientAddress: string;
    senderAddress: string;
    makerAssetAmount: ethers.BigNumberish;
    takerAssetAmount: ethers.BigNumberish;
    makerFee: ethers.BigNumberish;
    takerFee: ethers.BigNumberish;
    expirationTimeSeconds: ethers.BigNumberish;
    salt: ethers.BigNumberish;
    makerAssetData: string | ethers.utils.BytesLike;
    takerAssetData: string | ethers.utils.BytesLike;
  }) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IZeroExV2` contract transaction for `fillOrder` function.
   *
   * @contract IZeroExV2
   * @signature fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)
   * @method function fillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes) returns (tuple(uint256,uint256,uint256,uint256))
   */
  fillOrder: (
    $$0: {
      makerAddress: string;
      takerAddress: string;
      feeRecipientAddress: string;
      senderAddress: string;
      makerAssetAmount: ethers.BigNumberish;
      takerAssetAmount: ethers.BigNumberish;
      makerFee: ethers.BigNumberish;
      takerFee: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      salt: ethers.BigNumberish;
      makerAssetData: string | ethers.utils.BytesLike;
      takerAssetData: string | ethers.utils.BytesLike;
    },
    $$1: ethers.BigNumberish,
    $$2: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IZeroExV2` contract transaction for `preSign` function.
   *
   * @contract IZeroExV2
   * @signature preSign(bytes32,address,bytes)
   * @method function preSign(bytes32,address,bytes)
   */
  preSign: (
    $$0: string | ethers.utils.BytesLike,
    $$1: string,
    $$2: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function ZRX_ASSET_DATA() view returns (bytes)',
    'function cancelOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData))',
    'function cancelled(bytes32) view returns (bool)',
    'function fillOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData), uint256, bytes) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid))',
    'function filled(bytes32) view returns (uint256)',
    'function getAssetProxy(bytes4) view returns (address)',
    'function getOrderInfo(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)) view returns (tuple(uint8 orderStatus, bytes32 orderHash, uint256 orderTakerAssetFilledAmount))',
    'function isValidSignature(bytes32, address, bytes) view returns (bool)',
    'function preSign(bytes32, address, bytes)',
  ];
}

export interface IZeroExV2EthersContract extends ethers.Contract {
  'ZRX_ASSET_DATA()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'cancelled(bytes32)': ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'filled(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getAssetProxy(bytes4)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<string>;
  'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
    $$0: {
      makerAddress: string;
      takerAddress: string;
      feeRecipientAddress: string;
      senderAddress: string;
      makerAssetAmount: ethers.BigNumberish;
      takerAssetAmount: ethers.BigNumberish;
      makerFee: ethers.BigNumberish;
      takerFee: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      salt: ethers.BigNumberish;
      makerAssetData: string | ethers.utils.BytesLike;
      takerAssetData: string | ethers.utils.BytesLike;
    },
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }>;
  'isValidSignature(bytes32,address,bytes)': (
    $$0: string | ethers.utils.BytesLike,
    $$1: string,
    $$2: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
    $$0: {
      makerAddress: string;
      takerAddress: string;
      feeRecipientAddress: string;
      senderAddress: string;
      makerAssetAmount: ethers.BigNumberish;
      takerAssetAmount: ethers.BigNumberish;
      makerFee: ethers.BigNumberish;
      takerFee: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      salt: ethers.BigNumberish;
      makerAssetData: string | ethers.utils.BytesLike;
      takerAssetData: string | ethers.utils.BytesLike;
    },
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
    $$0: {
      makerAddress: string;
      takerAddress: string;
      feeRecipientAddress: string;
      senderAddress: string;
      makerAssetAmount: ethers.BigNumberish;
      takerAssetAmount: ethers.BigNumberish;
      makerFee: ethers.BigNumberish;
      takerFee: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      salt: ethers.BigNumberish;
      makerAssetData: string | ethers.utils.BytesLike;
      takerAssetData: string | ethers.utils.BytesLike;
    },
    $$1: ethers.BigNumberish,
    $$2: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'preSign(bytes32,address,bytes)': (
    $$0: string | ethers.utils.BytesLike,
    $$1: string,
    $$2: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'ZRX_ASSET_DATA()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'cancelled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'filled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getAssetProxy(bytes4)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
      $$0: {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: ethers.BigNumberish;
        takerAssetAmount: ethers.BigNumberish;
        makerFee: ethers.BigNumberish;
        takerFee: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        salt: ethers.BigNumberish;
        makerAssetData: string | ethers.utils.BytesLike;
        takerAssetData: string | ethers.utils.BytesLike;
      },
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }>;
    'isValidSignature(bytes32,address,bytes)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: string,
      $$2: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
      $$0: {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: ethers.BigNumberish;
        takerAssetAmount: ethers.BigNumberish;
        makerFee: ethers.BigNumberish;
        takerFee: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        salt: ethers.BigNumberish;
        makerAssetData: string | ethers.utils.BytesLike;
        takerAssetData: string | ethers.utils.BytesLike;
      },
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
      $$0: {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: ethers.BigNumberish;
        takerAssetAmount: ethers.BigNumberish;
        makerFee: ethers.BigNumberish;
        takerFee: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        salt: ethers.BigNumberish;
        makerAssetData: string | ethers.utils.BytesLike;
        takerAssetData: string | ethers.utils.BytesLike;
      },
      $$1: ethers.BigNumberish,
      $$2: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'preSign(bytes32,address,bytes)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: string,
      $$2: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'ZRX_ASSET_DATA()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'cancelled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'filled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getAssetProxy(bytes4)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
      $$0: {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: ethers.BigNumberish;
        takerAssetAmount: ethers.BigNumberish;
        makerFee: ethers.BigNumberish;
        takerFee: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        salt: ethers.BigNumberish;
        makerAssetData: string | ethers.utils.BytesLike;
        takerAssetData: string | ethers.utils.BytesLike;
      },
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }>;
    'isValidSignature(bytes32,address,bytes)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: string,
      $$2: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
      $$0: {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: ethers.BigNumberish;
        takerAssetAmount: ethers.BigNumberish;
        makerFee: ethers.BigNumberish;
        takerFee: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        salt: ethers.BigNumberish;
        makerAssetData: string | ethers.utils.BytesLike;
        takerAssetData: string | ethers.utils.BytesLike;
      },
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
      $$0: {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: ethers.BigNumberish;
        takerAssetAmount: ethers.BigNumberish;
        makerFee: ethers.BigNumberish;
        takerFee: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        salt: ethers.BigNumberish;
        makerAssetData: string | ethers.utils.BytesLike;
        takerAssetData: string | ethers.utils.BytesLike;
      },
      $$1: ethers.BigNumberish,
      $$2: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
    }>;
    'preSign(bytes32,address,bytes)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: string,
      $$2: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
  };

  estimateGas: {
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
      $$0: {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: ethers.BigNumberish;
        takerAssetAmount: ethers.BigNumberish;
        makerFee: ethers.BigNumberish;
        takerFee: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        salt: ethers.BigNumberish;
        makerAssetData: string | ethers.utils.BytesLike;
        takerAssetData: string | ethers.utils.BytesLike;
      },
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
      $$0: {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: ethers.BigNumberish;
        takerAssetAmount: ethers.BigNumberish;
        makerFee: ethers.BigNumberish;
        takerFee: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        salt: ethers.BigNumberish;
        makerAssetData: string | ethers.utils.BytesLike;
        takerAssetData: string | ethers.utils.BytesLike;
      },
      $$1: ethers.BigNumberish,
      $$2: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'preSign(bytes32,address,bytes)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: string,
      $$2: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))': (
      $$0: {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: ethers.BigNumberish;
        takerAssetAmount: ethers.BigNumberish;
        makerFee: ethers.BigNumberish;
        takerFee: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        salt: ethers.BigNumberish;
        makerAssetData: string | ethers.utils.BytesLike;
        takerAssetData: string | ethers.utils.BytesLike;
      },
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes)': (
      $$0: {
        makerAddress: string;
        takerAddress: string;
        feeRecipientAddress: string;
        senderAddress: string;
        makerAssetAmount: ethers.BigNumberish;
        takerAssetAmount: ethers.BigNumberish;
        makerFee: ethers.BigNumberish;
        takerFee: ethers.BigNumberish;
        expirationTimeSeconds: ethers.BigNumberish;
        salt: ethers.BigNumberish;
        makerAssetData: string | ethers.utils.BytesLike;
        takerAssetData: string | ethers.utils.BytesLike;
      },
      $$1: ethers.BigNumberish,
      $$2: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'preSign(bytes32,address,bytes)': (
      $$0: string | ethers.utils.BytesLike,
      $$1: string,
      $$2: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}

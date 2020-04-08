import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IUniswapExchange extends Contract {
  public readonly ethers: IUniswapExchangeEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IUniswapExchange` contract call for the `getEthToTokenInputPrice` function.
   *
   * @contract IUniswapExchange
   * @signature getEthToTokenInputPrice(uint256)
   * @method function getEthToTokenInputPrice(uint256) view returns (uint256)
   */
  getEthToTokenInputPrice: (
    eth_sold: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IUniswapExchange` contract call for the `getTokenToEthInputPrice` function.
   *
   * @contract IUniswapExchange
   * @signature getTokenToEthInputPrice(uint256)
   * @method function getTokenToEthInputPrice(uint256) view returns (uint256)
   */
  getTokenToEthInputPrice: (
    tokens_sold: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IUniswapExchange` contract transaction for `addLiquidity` function.
   *
   * @contract IUniswapExchange
   * @signature addLiquidity(uint256,uint256,uint256)
   * @method function addLiquidity(uint256,uint256,uint256) payable returns (uint256)
   */
  addLiquidity: (
    min_liquidity: ethers.BigNumberish,
    max_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `IUniswapExchange` contract transaction for `ethToTokenSwapInput` function.
   *
   * @contract IUniswapExchange
   * @signature ethToTokenSwapInput(uint256,uint256)
   * @method function ethToTokenSwapInput(uint256,uint256) payable returns (uint256)
   */
  ethToTokenSwapInput: (
    min_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `IUniswapExchange` contract transaction for `tokenToEthSwapInput` function.
   *
   * @contract IUniswapExchange
   * @signature tokenToEthSwapInput(uint256,uint256,uint256)
   * @method function tokenToEthSwapInput(uint256,uint256,uint256) returns (uint256)
   */
  tokenToEthSwapInput: (
    tokens_sold: ethers.BigNumberish,
    min_eth: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IUniswapExchange` contract transaction for `tokenToTokenSwapInput` function.
   *
   * @contract IUniswapExchange
   * @signature tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)
   * @method function tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address) returns (uint256)
   */
  tokenToTokenSwapInput: (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    token_addr: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function addLiquidity(uint256 min_liquidity, uint256 max_tokens, uint256 deadline) payable returns (uint256)',
    'function ethToTokenSwapInput(uint256 min_tokens, uint256 deadline) payable returns (uint256 tokens_bought)',
    'function getEthToTokenInputPrice(uint256 eth_sold) view returns (uint256 tokens_bought)',
    'function getTokenToEthInputPrice(uint256 tokens_sold) view returns (uint256 eth_bought)',
    'function tokenToEthSwapInput(uint256 tokens_sold, uint256 min_eth, uint256 deadline) returns (uint256 eth_bought)',
    'function tokenToTokenSwapInput(uint256 tokens_sold, uint256 min_tokens_bought, uint256 min_eth_bought, uint256 deadline, address token_addr) returns (uint256 tokens_bought)',
  ];
}

export interface IUniswapExchangeEthersContract extends ethers.Contract {
  'getEthToTokenInputPrice(uint256)': (
    eth_sold: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getTokenToEthInputPrice(uint256)': (
    tokens_sold: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'addLiquidity(uint256,uint256,uint256)': (
    min_liquidity: ethers.BigNumberish,
    max_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'ethToTokenSwapInput(uint256,uint256)': (
    min_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToEthSwapInput(uint256,uint256,uint256)': (
    tokens_sold: ethers.BigNumberish,
    min_eth: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)': (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    token_addr: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'getEthToTokenInputPrice(uint256)': (
      eth_sold: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getTokenToEthInputPrice(uint256)': (
      tokens_sold: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'addLiquidity(uint256,uint256,uint256)': (
      min_liquidity: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'ethToTokenSwapInput(uint256,uint256)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToEthSwapInput(uint256,uint256,uint256)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'getEthToTokenInputPrice(uint256)': (
      eth_sold: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getTokenToEthInputPrice(uint256)': (
      tokens_sold: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'addLiquidity(uint256,uint256,uint256)': (
      min_liquidity: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'ethToTokenSwapInput(uint256,uint256)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToEthSwapInput(uint256,uint256,uint256)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  estimateGas: {
    'addLiquidity(uint256,uint256,uint256)': (
      min_liquidity: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'ethToTokenSwapInput(uint256,uint256)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToEthSwapInput(uint256,uint256,uint256)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'addLiquidity(uint256,uint256,uint256)': (
      min_liquidity: ethers.BigNumberish,
      max_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'ethToTokenSwapInput(uint256,uint256)': (
      min_tokens: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToEthSwapInput(uint256,uint256,uint256)': (
      tokens_sold: ethers.BigNumberish,
      min_eth: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tokenToTokenSwapInput(uint256,uint256,uint256,uint256,address)': (
      tokens_sold: ethers.BigNumberish,
      min_tokens_bought: ethers.BigNumberish,
      min_eth_bought: ethers.BigNumberish,
      deadline: ethers.BigNumberish,
      token_addr: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}

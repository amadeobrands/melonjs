import { ethers } from 'ethers';
import { SharesFactory } from './SharesFactory';

export const SharesFactoryBytecode =
  '0x608060405234801561001057600080fd5b5061170f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630a726fe5146100465780636b44e6be146100805780637726f776146100a6575b600080fd5b61006c6004803603602081101561005c57600080fd5b50356001600160a01b03166100e8565b604080519115158252519081900360200190f35b61006c6004803603602081101561009657600080fd5b50356001600160a01b03166100fd565b6100cc600480360360208110156100bc57600080fd5b50356001600160a01b031661011b565b604080516001600160a01b039092168252519081900360200190f35b60006020819052908152604090205460ff1681565b6001600160a01b031660009081526020819052604090205460ff1690565b6000808260405161012b906101b2565b6001600160a01b03909116815260405190819003602001906000f080158015610158573d6000803e3d6000fd5b506001600160a01b03808216600081815260208190526040808220805460ff19166001179055519394509092918616917fdeebba25327991df4af0788fd4c27a53895cea8db060fcf13171fd8d2ee8b75e9190a392915050565b61151a806101c08339019056fe60806040523480156200001157600080fd5b506040516200151a3803806200151a833981810160405260208110156200003757600080fd5b5051600180546001600160a01b03191633908117909155604051829190600080516020620014fa83398151915290600090a2600280546001600160a01b0319166001600160a01b03838116919091179182905562000096911662000252565b600254620000b6906001600160a01b03166001600160e01b036200031116565b50600260009054906101000a90046001600160a01b03166001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156200010657600080fd5b505afa1580156200011b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156200014557600080fd5b81019080805160405193929190846401000000008211156200016657600080fd5b9083019060208201858111156200017c57600080fd5b82516401000000008111828201881017156200019757600080fd5b82525081516020918201929091019080838360005b83811015620001c6578181015183820152602001620001ac565b50505050905090810190601f168015620001f45780820380516001836020036101000a031916815260200191505b50604052505081516200020f926013925060200190620004b5565b506040805180820190915260048082526326a6272360e11b60209092019182526200023d91601291620004b5565b50506014805460ff191660121790556200055a565b62000273336001600160e01b0319600035166001600160e01b03620003c316565b620002c5576040805162461bcd60e51b815260206004820152601460248201527f64732d617574682d756e617574686f72697a6564000000000000000000000000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b62000332336001600160e01b0319600035166001600160e01b03620003c316565b62000384576040805162461bcd60e51b815260206004820152601460248201527f64732d617574682d756e617574686f72697a6564000000000000000000000000604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b038381169190911791829055604051911690600080516020620014fa83398151915290600090a250565b60006001600160a01b038316301415620003e057506001620004af565b6001546001600160a01b03848116911614156200040057506001620004af565b6000546001600160a01b03166200041a57506000620004af565b6000546040805163b700961360e01b81526001600160a01b0386811660048301523060248301526001600160e01b0319861660448301529151919092169163b7009613916064808301926020929190829003018186803b1580156200047e57600080fd5b505afa15801562000493573d6000803e3d6000fd5b505050506040513d6020811015620004aa57600080fd5b505190505b92915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004f857805160ff191683800117855562000528565b8280016001018555821562000528579182015b82811115620005285782518255916020019190600101906200050b565b50620005369291506200053a565b5090565b6200055791905b8082111562000536576000815560010162000541565b90565b610f90806200056a6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80637a9e5e4b116100de578063b1ffd47111610097578063c9d4623f11610071578063c9d4623f14610454578063cd7bc5161461045c578063d73dd62314610210578063dd62ed3e146104885761018e565b8063b1ffd471146103ba578063bec614621461042f578063bf7e214f1461044c5761018e565b80637a9e5e4b146103745780637b1039991461039a5780638a471df9146103a25780638da5cb5b146103aa57806395d89b41146103b2578063a9059cbb146102105761018e565b806320531bc91161014b578063365a86fc11610125578063365a86fc1461033e57806354fd4d5014610346578063661884631461021057806370a082311461034e5761018e565b806320531bc9146102c657806323b872dd146102ea578063313ce567146103205761018e565b806306fdde0314610193578063095ea7b31461021057806313af403514610250578063158ef93e1461027857806318160ddd146102805780631d48946c1461029a575b600080fd5b61019b6104b6565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101d55781810151838201526020016101bd565b50505050905090810190601f1680156102025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023c6004803603604081101561022657600080fd5b506001600160a01b038135169060200135610544565b604080519115158252519081900360200190f35b6102766004803603602081101561026657600080fd5b50356001600160a01b0316610583565b005b61023c610631565b61028861063a565b60408051918252519081900360200190f35b610276600480360360408110156102b057600080fd5b506001600160a01b038135169060200135610640565b6102ce6106ac565b604080516001600160a01b039092168252519081900360200190f35b61023c6004803603606081101561030057600080fd5b506001600160a01b03813581169160208101359091169060400135610544565b610328610722565b6040805160ff9092168252519081900360200190f35b6102ce61072b565b6102ce61073a565b6102886004803603602081101561036457600080fd5b50356001600160a01b0316610749565b6102766004803603602081101561038a57600080fd5b50356001600160a01b0316610764565b6102ce61080e565b6102ce61081d565b6102ce61082c565b61019b61083b565b6103c2610896565b604080516001600160a01b039c8d1681529a8c1660208c0152988b168a8a0152968a1660608a0152948916608089015292881660a088015290871660c0870152861660e0860152851661010085015284166101208401529092166101408201529051908190036101600190f35b610276600480360361016081101561044657600080fd5b506108eb565b6102ce610c1a565b6102ce610c29565b6102766004803603604081101561047257600080fd5b506001600160a01b038135169060200135610c38565b6102886004803603604081101561049e57600080fd5b506001600160a01b0381358116916020013516610ca0565b6013805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561053c5780601f106105115761010080835404028352916020019161053c565b820191906000526020600020905b81548152906001019060200180831161051f57829003601f168201915b505050505081565b6040805162461bcd60e51b815260206004820152600d60248201526c155b9a5b5c1b195b595b9d1959609a1b6044820152905160009181900360640190fd5b610599336000356001600160e01b031916610ccd565b6105e1576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b600e5460ff1681565b60115490565b610656336000356001600160e01b031916610ccd565b61069e576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b6106a88282610db4565b5050565b600254604080516320531bc960e01b815290516000926001600160a01b0316916320531bc9916004808301926020929190829003018186803b1580156106f157600080fd5b505afa158015610705573d6000803e3d6000fd5b505050506040513d602081101561071b57600080fd5b5051905090565b60145460ff1681565b6002546001600160a01b031681565b600b546001600160a01b031690565b6001600160a01b03166000908152600f602052604090205490565b61077a336000356001600160e01b031916610ccd565b6107c2576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b600a546001600160a01b031690565b600d546001600160a01b031690565b6001546001600160a01b031681565b6012805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561053c5780601f106105115761010080835404028352916020019161053c565b600354600454600554600654600754600854600954600a54600b54600c54600d546001600160a01b039a8b169a998a16999889169897881697968716969586169594851694938416939283169291821691168b565b610901336000356001600160e01b031916610ccd565b610949576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b6002546001600160a01b0316331461096057600080fd5b600e5460ff16156109ae576040805162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b604482015290519081900360640190fd5b60408051610160810182526001600160a01b038335811682526020808501358216908301528383013516918101919091526060810182600360200201356001600160a01b03166001600160a01b03168152602001826004600b8110610a0f57fe5b60200201356001600160a01b03166001600160a01b03168152602001826005600b8110610a3857fe5b60200201356001600160a01b03166001600160a01b03168152602001826006600b8110610a6157fe5b60200201356001600160a01b03166001600160a01b03168152602001826007600b8110610a8a57fe5b60200201356001600160a01b03166001600160a01b03168152602001826008600b8110610ab357fe5b60200201356001600160a01b03166001600160a01b03168152602001826009600b8110610adc57fe5b60200201356001600160a01b03166001600160a01b0316815260200182600a600b8110610b0557fe5b602090810291909101356001600160a01b039081169092528251600380546001600160a01b03199081169285169290921790559083015160048054831691841691909117905560408301516005805483169184169190911790556060830151600680548316918416919091179055608083015160078054831691841691909117905560a083015160088054831691841691909117905560c083015160098054831691841691909117905560e0830151600a80548316918416919091179055610100830151600b80548316918416919091179055610120830151600c8054831691841691909117905561014090920151600d80549093169116179055600e805460ff19166001179055610c176000610583565b50565b6000546001600160a01b031681565b600c546001600160a01b031690565b610c4e336000356001600160e01b031916610ccd565b610c96576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b6106a88282610e5e565b6001600160a01b038083166000908152601060209081526040808320938516835292905220545b92915050565b60006001600160a01b038316301415610ce857506001610cc7565b6001546001600160a01b0384811691161415610d0657506001610cc7565b6000546001600160a01b0316610d1e57506000610cc7565b6000546040805163b700961360e01b81526001600160a01b0386811660048301523060248301526001600160e01b0319861660448301529151919092169163b7009613916064808301926020929190829003018186803b158015610d8157600080fd5b505afa158015610d95573d6000803e3d6000fd5b505050506040513d6020811015610dab57600080fd5b50519050610cc7565b6001600160a01b038216610dc757600080fd5b601154610dda908263ffffffff610f2c16565b6011556001600160a01b0382166000908152600f6020526040902054610e06908263ffffffff610f2c16565b6001600160a01b0383166000818152600f602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216610e7157600080fd5b6001600160a01b0382166000908152600f6020526040902054811115610e9657600080fd5b601154610ea9908263ffffffff610f4516565b6011556001600160a01b0382166000908152600f6020526040902054610ed5908263ffffffff610f4516565b6001600160a01b0383166000818152600f60209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b600082820183811015610f3e57600080fd5b9392505050565b600082821115610f5457600080fd5b5090039056fea264697066735822122018a95563e3e8baa001a1d6e0bdec892f22e06c41521bf5250392d69c7b9ee4f764736f6c63430006010033ce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94a2646970667358221220692d8a3823bee75970f8ce773c1c84585f5d3a5542bbaf599e994f5d0fc8c9fa64736f6c63430006010033';

export function deploySharesFactory(signer: ethers.Signer) {
  return SharesFactory.deploy(SharesFactoryBytecode, signer);
}
import { ethers } from 'ethers';
import { PolicyManager } from './PolicyManager';
import { AddressLike } from '../..';

export const PolicyManagerBytecode =
  '0x60806040523480156200001157600080fd5b50604051620017d2380380620017d2833981810160405260208110156200003757600080fd5b5051600180546001600160a01b03191633908117909155604051829190600080516020620017b283398151915290600090a2600280546001600160a01b0319166001600160a01b038381169190911791829055620000969116620000be565b600254620000b6906001600160a01b03166001600160e01b036200017d16565b505062000321565b620000df336001600160e01b0319600035166001600160e01b036200022f16565b62000131576040805162461bcd60e51b815260206004820152601460248201527f64732d617574682d756e617574686f72697a6564000000000000000000000000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6200019e336001600160e01b0319600035166001600160e01b036200022f16565b620001f0576040805162461bcd60e51b815260206004820152601460248201527f64732d617574682d756e617574686f72697a6564000000000000000000000000604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b038381169190911791829055604051911690600080516020620017b283398151915290600090a250565b60006001600160a01b0383163014156200024c575060016200031b565b6001546001600160a01b03848116911614156200026c575060016200031b565b6000546001600160a01b031662000286575060006200031b565b6000546040805163b700961360e01b81526001600160a01b0386811660048301523060248301526001600160e01b0319861660448301529151919092169163b7009613916064808301926020929190829003018186803b158015620002ea57600080fd5b505afa158015620002ff573d6000803e3d6000fd5b505050506040513d60208110156200031657600080fd5b505190505b92915050565b61148180620003316000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638a471df9116100a2578063bec6146211610071578063bec6146214610463578063bf7e214f14610480578063c2f98e7814610488578063c9d4623f14610517578063da6670d31461051f57610116565b80638a471df9146103a85780638da5cb5b146103b0578063a6c354b0146103b8578063b1ffd471146103ee57610116565b80634e2c75f3116100e95780634e2c75f31461018b57806354fd4d501461024b5780637a9e5e4b146102535780637b103999146102795780638665f0ac1461028157610116565b806313af40351461011b578063158ef93e1461014357806320531bc91461015f578063365a86fc14610183575b600080fd5b6101416004803603602081101561013157600080fd5b50356001600160a01b03166105ae565b005b61014b61065c565b604080519115158252519081900360200190f35b610167610665565b604080516001600160a01b039092168252519081900360200190f35b6101676106db565b6101b2600480360360208110156101a157600080fd5b50356001600160e01b0319166106ea565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156101f65781810151838201526020016101de565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561023557818101518382015260200161021d565b5050505090500194505050505060405180910390f35b61016761073f565b6101416004803603602081101561026957600080fd5b50356001600160a01b031661074e565b6101676107f8565b6101416004803603604081101561029757600080fd5b8101906020810181356401000000008111156102b257600080fd5b8201836020820111156102c457600080fd5b803590602001918460208302840111640100000000831117156102e657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561033657600080fd5b82018360208201111561034857600080fd5b8035906020019184602083028401116401000000008311171561036a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610807945050505050565b6101676108fd565b61016761090c565b610141600480360360408110156103ce57600080fd5b5080356001600160e01b03191690602001356001600160a01b031661091b565b6103f6610b47565b604080516001600160a01b039c8d1681529a8c1660208c0152988b168a8a0152968a1660608a0152948916608089015292881660a088015290871660c0870152861660e0860152851661010085015284166101208401529092166101408201529051908190036101600190f35b610141600480360361016081101561047a57600080fd5b50610b9c565b610167610ecb565b610141600480360361014081101561049f57600080fd5b6040805160a08181019092526001600160e01b031984351693928301929160c0830191906020840190600590839083908082843760009201919091525050604080516060818101909252929594938181019392509060039083908390808284376000920191909152509194505090359150610eda9050565b610167610f09565b610141600480360361014081101561053657600080fd5b6040805160a08181019092526001600160e01b031984351693928301929160c0830191906020840190600590839083908082843760009201919091525050604080516060818101909252929594938181019392509060039083908390808284376000920191909152509194505090359150610f189050565b6105c4336000356001600160e01b031916610f3e565b61060c576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b600e5460ff1681565b600254604080516320531bc960e01b815290516000926001600160a01b0316916320531bc9916004808301926020929190829003018186803b1580156106aa57600080fd5b505afa1580156106be573d6000803e3d6000fd5b505050506040513d60208110156106d457600080fd5b5051905090565b6002546001600160a01b031681565b6001600160e01b031981166000908152600f60205260409020606090819061071190611027565b6001600160e01b031984166000908152600f6020526040902061073690600101611027565b91509150915091565b600b546001600160a01b031690565b610764336000356001600160e01b031916610f3e565b6107ac576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b600a546001600160a01b031690565b61081d336000356001600160e01b031916610f3e565b610865576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b80518251146108b4576040805162461bcd60e51b8152602060048201526016602482015275105c9c985e5cc81b195b99dd1a1cc81d5b995c5d585b60521b604482015290519081900360640190fd5b60005b82518110156108f8576108f08382815181106108cf57fe5b60200260200101518383815181106108e357fe5b602002602001015161091b565b6001016108b7565b505050565b600d546001600160a01b031690565b6001546001600160a01b031681565b610931336000356001600160e01b031916610f3e565b610979576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b6000816001600160a01b03166309218e916040518163ffffffff1660e01b815260040160206040518083038186803b1580156109b457600080fd5b505afa1580156109c8573d6000803e3d6000fd5b505050506040513d60208110156109de57600080fd5b5051905060008160018111156109f057fe5b1415610a3d576001600160e01b031983166000908152600f602090815260408220805460018101825590835291200180546001600160a01b0319166001600160a01b038416179055610ae8565b6001816001811115610a4b57fe5b1415610a9b576001600160e01b031983166000908152600f602090815260408220600190810180549182018155835291200180546001600160a01b0319166001600160a01b038416179055610ae8565b6040805162461bcd60e51b815260206004820152601960248201527f4f6e6c792070726520616e6420706f737420616c6c6f77656400000000000000604482015290519081900360640190fd5b816001600160a01b0316836001600160e01b0319167f0d94c45afedf490a253b2ec313d3c1d08ab6019921b3f45b23825329b2f5a0398360405180826001811115610b2f57fe5b60ff16815260200191505060405180910390a3505050565b600354600454600554600654600754600854600954600a54600b54600c54600d546001600160a01b039a8b169a998a16999889169897881697968716969586169594851694938416939283169291821691168b565b610bb2336000356001600160e01b031916610f3e565b610bfa576040805162461bcd60e51b8152602060048201526014602482015273191ccb585d5d1a0b5d5b985d5d1a1bdc9a5e995960621b604482015290519081900360640190fd5b6002546001600160a01b03163314610c1157600080fd5b600e5460ff1615610c5f576040805162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b604482015290519081900360640190fd5b60408051610160810182526001600160a01b038335811682526020808501358216908301528383013516918101919091526060810182600360200201356001600160a01b03166001600160a01b03168152602001826004600b8110610cc057fe5b60200201356001600160a01b03166001600160a01b03168152602001826005600b8110610ce957fe5b60200201356001600160a01b03166001600160a01b03168152602001826006600b8110610d1257fe5b60200201356001600160a01b03166001600160a01b03168152602001826007600b8110610d3b57fe5b60200201356001600160a01b03166001600160a01b03168152602001826008600b8110610d6457fe5b60200201356001600160a01b03166001600160a01b03168152602001826009600b8110610d8d57fe5b60200201356001600160a01b03166001600160a01b0316815260200182600a600b8110610db657fe5b602090810291909101356001600160a01b039081169092528251600380546001600160a01b03199081169285169290921790559083015160048054831691841691909117905560408301516005805483169184169190911790556060830151600680548316918416919091179055608083015160078054831691841691909117905560a083015160088054831691841691909117905560c083015160098054831691841691909117905560e0830151600a80548316918416919091179055610100830151600b80548316918416919091179055610120830151600c8054831691841691909117905561014090920151600d80549093169116179055600e805460ff19166001179055610ec860006105ae565b50565b6000546001600160a01b031681565b6001600160e01b031984166000908152600f60205260409020610f0390600101858585856110c4565b50505050565b600c546001600160a01b031690565b6001600160e01b031984166000908152600f60205260409020610f0390858585856110c4565b60006001600160a01b038316301415610f5957506001611021565b6001546001600160a01b0384811691161415610f7757506001611021565b6000546001600160a01b0316610f8f57506000611021565b6000546040805163b700961360e01b81526001600160a01b0386811660048301523060248301526001600160e01b0319861660448301529151919092169163b7009613916064808301926020929190829003018186803b158015610ff257600080fd5b505afa158015611006573d6000803e3d6000fd5b505050506040513d602081101561101c57600080fd5b505190505b92915050565b6060808280549050604051908082528060200260200182016040528015611058578160200160208202803883390190505b50905060005b83548110156110bd5783818154811061107357fe5b9060005260206000200160009054906101000a90046001600160a01b031682828151811061109d57fe5b6001600160a01b039092166020928302919091019091015260010161105e565b5092915050565b60005b8554811015611443578581815481106110dc57fe5b9060005260206000200160009054906101000a90046001600160a01b03166001600160a01b03166308a6d790868686866040518563ffffffff1660e01b815260040180856001600160e01b0319166001600160e01b031916815260200184600560200280838360005b8381101561115d578181015183820152602001611145565b5050505090500183600360200280838360005b83811015611188578181015183820152602001611170565b50505050905001828152602001945050505050602060405180830381600087803b1580156111b557600080fd5b505af11580156111c9573d6000803e3d6000fd5b505050506040513d60208110156111df57600080fd5b505186548790839081106111ef57fe5b600091825260208220015460408051631e66287160e21b815290516001600160a01b0390921692637998a1c492600480840193829003018186803b15801561123657600080fd5b505afa15801561124a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561127357600080fd5b810190808051604051939291908464010000000082111561129357600080fd5b9083019060208201858111156112a857600080fd5b82516401000000008111828201881017156112c257600080fd5b82525081516020918201929091019080838360005b838110156112ef5781810151838201526020016112d7565b50505050905090810190601f16801561131c5780820380516001836020036101000a031916815260200191505b5060405250505060405160200180807f52756c65206576616c756174656420746f2066616c73653a200000000000000081525060190182805190602001908083835b6020831061137d5780518252601f19909201916020918201910161135e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040529061143a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156113ff5781810151838201526020016113e7565b50505050905090810190601f16801561142c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506001016110c7565b50505050505056fea2646970667358221220b5f2a09e58c5174806c581c2d4f3360cc23be9b0b1374ab456b443a17955f0fd64736f6c63430006010033ce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed94';

export function deployPolicyManager(signer: ethers.Signer, _hub: AddressLike) {
  return PolicyManager.deploy(PolicyManagerBytecode, signer, _hub);
}
import { ethers } from 'ethers';
import { ZeroExV3Adapter } from './ZeroExV3Adapter';

export const ZeroExV3AdapterBytecode =
  '0x608060405234801561001057600080fd5b50613a96806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635f08e9091461005157806363b24ef114610066578063d7d1c4d514610079578063f6808497146100a5575b600080fd5b61006461005f366004612d54565b6100b8565b005b610064610074366004612d54565b6104a5565b61008c610087366004612e48565b610717565b60405161009c94939291906133aa565b60405180910390f35b6100646100b3366004612d54565b61099a565b336100c1610be5565b6001600160a01b0316146100f05760405162461bcd60e51b81526004016100e790613730565b60405180910390fd5b6100f8610c64565b156101155760405162461bcd60e51b81526004016100e7906137e2565b84848482600260200201516001600160a01b031661013a8260005b6020020151610cde565b6001600160a01b0316146101605760405162461bcd60e51b81526004016100e790613819565b60608301516001600160a01b0316610179826001610130565b6001600160a01b03161461019f5760405162461bcd60e51b81526004016100e7906134f2565b6040820151156101e85760c08301516001600160a01b03166101c2826002610130565b6001600160a01b0316146101e85760405162461bcd60e51b81526004016100e7906138a6565b6060820151156102315760e08301516001600160a01b031661020b826003610130565b6001600160a01b0316146102315760405162461bcd60e51b81526004016100e7906136d3565b604088015161023f90610ce5565b610247612aa9565b610252898989610d8a565b905060006102608882610130565b9050600061026f896001610130565b9050610279610e88565b6001600160a01b03166306c0770e836040518263ffffffff1660e01b81526004016102a49190613342565b602060405180830381600087803b1580156102be57600080fd5b505af11580156102d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506102f691908101906130b1565b5061030082610e8c565b61030a8c84610f2c565b610312612b3c565b604051639d3fa4b960e01b81526001600160a01b038e1690639d3fa4b99061033e90879060040161394b565b60606040518083038186803b15801561035657600080fd5b505afa15801561036a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061038e9190810190612efa565b602081015160405163236016bd60e11b81529192506001600160a01b038f16916346c02d7a916103c091600401613479565b600060405180830381600087803b1580156103da57600080fd5b505af11580156103ee573d6000803e3d6000fd5b505050508c6001600160a01b031663a12dcc6f858a6040518363ffffffff1660e01b815260040161042092919061395e565b60206040518083038186803b15801561043857600080fd5b505afa15801561044c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506104709190810190612e89565b61048c5760405162461bcd60e51b81526004016100e79061363f565b6104968d85610fd7565b50505050505050505050505050565b336104ae610be5565b6001600160a01b0316146104d45760405162461bcd60e51b81526004016100e790613730565b6104dc610c64565b156104f95760405162461bcd60e51b81526004016100e7906137e2565b84848482600260200201516001600160a01b0316610518826000610130565b6001600160a01b03161461053e5760405162461bcd60e51b81526004016100e790613819565b60608301516001600160a01b0316610557826001610130565b6001600160a01b03161461057d5760405162461bcd60e51b81526004016100e7906134f2565b6040820151156105c65760c08301516001600160a01b03166105a0826002610130565b6001600160a01b0316146105c65760405162461bcd60e51b81526004016100e7906138a6565b60608201511561060f5760e08301516001600160a01b03166105e9826003610130565b6001600160a01b03161461060f5760405162461bcd60e51b81526004016100e7906136d3565b610617612aa9565b610622898989610d8a565b60405163a12dcc6f60e01b81529091506001600160a01b038b169063a12dcc6f90610653908490899060040161395e565b60206040518083038186803b15801561066b57600080fd5b505afa15801561067f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506106a39190810190612e89565b6106bf5760405162461bcd60e51b81526004016100e790613760565b60c08801516106cf8b83836112af565b60006106dd8c84848a611378565b90508181146106fe5760405162461bcd60e51b81526004016100e7906135c1565b6107098c8484611739565b505050505050505050505050565b6000806000806000806000806000336001600160a01b0316632e62efbb8d8c6040518363ffffffff1660e01b8152600401610753929190613356565b60606040518083038186803b15801561076b57600080fd5b505afa15801561077f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506107a391908101906130c9565b60405163ec7dd7bb60e01b81529297509550339163ec7dd7bb91506107cc908790600401613479565b60806040518083038186803b1580156107e457600080fd5b505afa1580156107f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061081c9190810190612d0d565b60405163288cdc9160e01b81529296509094509250600091506001600160a01b038e169063288cdc9190610854908990600401613479565b60206040518083038186803b15801561086c57600080fd5b505afa158015610880573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506108a491908101906130b1565b90506000826108b38386611a91565b816108ba57fe5b604051631560931160e11b815291900491506001600160a01b038f1690632ac12622906108eb908a90600401613479565b60206040518083038186803b15801561090357600080fd5b505afa158015610917573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061093b9190810190612e89565b8061094d575061094b8383611ace565b155b1561096b57508a995092975060009650869550610991945050505050565b8b856109778684611ace565b6109818686611ace565b9a509a509a509a50505050505050505b93509350935093565b84848482600260200201516001600160a01b03166109b9826000610130565b6001600160a01b0316146109df5760405162461bcd60e51b81526004016100e790613819565b60608301516001600160a01b03166109f8826001610130565b6001600160a01b031614610a1e5760405162461bcd60e51b81526004016100e7906134f2565b604082015115610a675760c08301516001600160a01b0316610a41826002610130565b6001600160a01b031614610a675760405162461bcd60e51b81526004016100e7906138a6565b606082015115610ab05760e08301516001600160a01b0316610a8a826003610130565b6001600160a01b031614610ab05760405162461bcd60e51b81526004016100e7906136d3565b610ab8612aa9565b610ac0610e88565b6001600160a01b03166364046c95876040518263ffffffff1660e01b8152600401610aeb9190613479565b60006040518083038186803b158015610b0357600080fd5b505afa158015610b17573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b3f9190810190612f44565b9050610b598a610b53836101400151610cde565b88611af1565b428161010001511115610bc557604051632da6298760e01b81526001600160a01b038b1690632da6298790610b9290849060040161394b565b600060405180830381600087803b158015610bac57600080fd5b505af1158015610bc0573d6000803e3d6000fd5b505050505b610bcf8a82611c67565b610bd98a826120e5565b50505050505050505050565b6000610bef6122d5565b6001600160a01b031663481c6a756040518163ffffffff1660e01b815260040160206040518083038186803b158015610c2757600080fd5b505afa158015610c3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610c5f9190810190612cea565b905090565b6000610c6e6122d5565b6001600160a01b031663ff9475256040518163ffffffff1660e01b815260040160206040518083038186803b158015610ca657600080fd5b505afa158015610cba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610c5f9190810190612e89565b6024015190565b610ced610e88565b6001600160a01b031663cc460a02826040518263ffffffff1660e01b8152600401610d189190613342565b60206040518083038186803b158015610d3057600080fd5b505afa158015610d44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610d6891908101906130b1565b421015610d875760405162461bcd60e51b81526004016100e790613903565b50565b610d92612aa9565b604080516101c08101825285516001600160a01b03908116825260208088015182168184015260808089015183168486015260a0808a01519093166060850152875190840152860151908201529084015160c082015260e081018460036020020151815260200184600460088110610e0657fe5b6020020151815260200184600560088110610e1d57fe5b6020020151815260200183600060048110610e3457fe5b6020020151815260200183600160048110610e4b57fe5b6020020151815260200183600260048110610e6257fe5b6020020151815260200183600360048110610e7957fe5b60200201519052949350505050565b3090565b610e94610e88565b6001600160a01b03166377076855826040518263ffffffff1660e01b8152600401610ebf9190613342565b60206040518083038186803b158015610ed757600080fd5b505afa158015610eeb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610f0f9190810190612e89565b15610d875760405162461bcd60e51b81526004016100e790613797565b610f79610f3d826101400151610cde565b610f4c84846101400151612317565b83608001516040518060400160405280600a8152602001691b585ad95c905cdcd95d60b21b8152506123ae565b60c081015115610fd357610fd3610f94826101800151610cde565b610fa384846101800151612317565b8360c001516040518060400160405280600d81526020016c1b585ad95c919959505cdcd95d609a1b8152506123ae565b5050565b6000610fe7826101400151610cde565b90506000610ff9836101600151610cde565b9050611003612b3c565b604051639d3fa4b960e01b81526001600160a01b03861690639d3fa4b99061102f90879060040161394b565b60606040518083038186803b15801561104757600080fd5b505afa15801561105b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061107f9190810190612efa565b90506110896126a1565b6001600160a01b03166307afbe74836040518263ffffffff1660e01b81526004016110b49190613342565b600060405180830381600087803b1580156110ce57600080fd5b505af11580156110e2573d6000803e3d6000fd5b505050506110ee610e88565b6001600160a01b031663195a261f86836020015160006040518060400160405280896001600160a01b03166001600160a01b03168152602001886001600160a01b03166001600160a01b031681525060405180606001604052808b6080015181526020018b60a00151815260200160008152506040518663ffffffff1660e01b81526004016111819594939291906133d3565b600060405180830381600087803b15801561119b57600080fd5b505af11580156111af573d6000803e3d6000fd5b505050506111bb610e88565b6001600160a01b0316635ea24d9a8685856111da896101800151610cde565b60208701516101008b01516040516001600160e01b031960e089901b16815261120b96959493929190600401613370565b600060405180830381600087803b15801561122557600080fd5b505af1158015611239573d6000803e3d6000fd5b50505050611245610e88565b6001600160a01b0316634caa5adf8260200151866040518363ffffffff1660e01b8152600401611276929190613482565b600060405180830381600087803b15801561129057600080fd5b505af11580156112a4573d6000803e3d6000fd5b505050505050505050565b6112b8836126e3565b60008260a001516112cd8460e0015184611a91565b816112d457fe5b0490506113206112e8846101600151610cde565b6112f786866101600151612317565b846040518060400160405280600a8152602001691d185ad95c905cdcd95d60b21b8152506123ae565b801561137257611372611337846101a00151610cde565b61134686866101a00151612317565b836040518060400160405280600d81526020016c1d185ad95c919959505cdcd95d609a1b8152506123ae565b50505050565b6000806113836122d5565b90506000611395866101400151610cde565b90506000816001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016113c59190613342565b60206040518083038186803b1580156113dd57600080fd5b505afa1580156113f1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061141591908101906130b1565b905061141f612b5c565b604051634da26aab60e11b81526001600160a01b038a1690639b44d5569061144f908b908b908b9060040161398c565b60a060405180830381600087803b15801561146957600080fd5b505af115801561147d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506114a19190810190612ea9565b90506000836001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016114d19190613342565b60206040518083038186803b1580156114e957600080fd5b505afa1580156114fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061152191908101906130b1565b90506000856001600160a01b0316639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561155e57600080fd5b505afa158015611572573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506115969190810190612cea565b6001600160a01b031663bf53253b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156115ce57600080fd5b505afa1580156115e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506116069190810190612cea565b6001600160a01b0316856001600160a01b03161480156116a9575060006001600160a01b03168b6001600160a01b031663850a15016040518163ffffffff1660e01b815260040160206040518083038186803b15801561166557600080fd5b505afa158015611679573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061169d9190810190612cea565b6001600160a01b031614155b156116ba576116b78b6128ac565b90505b6116c88a6101a00151610cde565b6001600160a01b0316856001600160a01b031614156116f2576116ef818b60e00151612928565b90505b611709611703858560000151612928565b82611ace565b82146117275760405162461bcd60e51b81526004016100e790613576565b50506020015198975050505050505050565b6000611749836101400151610cde565b9050600061175b846101600151610cde565b90506117656126a1565b6001600160a01b03166307afbe74836040518263ffffffff1660e01b81526004016117909190613342565b600060405180830381600087803b1580156117aa57600080fd5b505af11580156117be573d6000803e3d6000fd5b505050506117ca6126a1565b6001600160a01b03166371b580586040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561180457600080fd5b505af1158015611818573d6000803e3d6000fd5b50505050611824610e88565b6001600160a01b03166377076855836040518263ffffffff1660e01b815260040161184f9190613342565b60206040518083038186803b15801561186757600080fd5b505afa15801561187b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061189f9190810190612e89565b15801561192c57506118af610e88565b6001600160a01b031663caf26389836040518263ffffffff1660e01b81526004016118da9190613342565b60206040518083038186803b1580156118f257600080fd5b505afa158015611906573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061192a91908101906130b1565b155b1561199757611939610e88565b6001600160a01b03166319ab7f43836040518263ffffffff1660e01b81526004016119649190613342565b600060405180830381600087803b15801561197e57600080fd5b505af1158015611992573d6000803e3d6000fd5b505050505b61199f610e88565b6001600160a01b031663195a261f86876001600160a01b0316639d3fa4b9886040518263ffffffff1660e01b81526004016119da919061394b565b60606040518083038186803b1580156119f257600080fd5b505afa158015611a06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611a2a9190810190612efa565b6020908101516040805180820182526001600160a01b03808a168252881681850152815160608101835260808c0151815260a08c0151948101949094528382018a905290516001600160e01b031960e087901b1681526112769493600192916004016133d3565b6000811580611aac57505080820282828281611aa957fe5b04145b611ac85760405162461bcd60e51b81526004016100e790613548565b92915050565b80820382811115611ac85760405162461bcd60e51b81526004016100e7906134c3565b33611afa610be5565b6001600160a01b03161480611b125750611b12610c64565b80611b9d5750611b20610e88565b6001600160a01b03166319c8916b84846040518363ffffffff1660e01b8152600401611b4d929190613356565b60206040518083038186803b158015611b6557600080fd5b505afa158015611b79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611b9d9190810190612e89565b611bb95760405162461bcd60e51b81526004016100e79061386f565b6000611bc3610e88565b6001600160a01b0316639b91f84a85856040518363ffffffff1660e01b8152600401611bf0929190613356565b60a06040518083038186803b158015611c0857600080fd5b505afa158015611c1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611c4091908101906130f6565b50929350505082821490506113725760405162461bcd60e51b81526004016100e790613676565b6000611c77826101400151610cde565b90506000611c89836101800151610cde565b90506000846001600160a01b0316639d3fa4b9856040518263ffffffff1660e01b8152600401611cb9919061394b565b60606040518083038186803b158015611cd157600080fd5b505afa158015611ce5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611d099190810190612efa565b6020015190506000856001600160a01b031663288cdc91836040518263ffffffff1660e01b8152600401611d3d9190613479565b60206040518083038186803b158015611d5557600080fd5b505afa158015611d69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611d8d91908101906130b1565b905060008560a00151611da4838860800151611a91565b81611dab57fe5b0490506000611dbe876080015183611ace565b905060008760800151611dd58960c0015184611a91565b81611ddc57fe5b049050611e1b87611df28b8b6101400151612317565b846040518060400160405280600a8152602001691b585ad95c905cdcd95d60b21b81525061294b565b6000611e25610e88565b6001600160a01b031663caf26389896040518263ffffffff1660e01b8152600401611e509190613342565b60206040518083038186803b158015611e6857600080fd5b505afa158015611e7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611ea091908101906130b1565b905080611f0d57611eaf610e88565b6001600160a01b03166319ab7f43896040518263ffffffff1660e01b8152600401611eda9190613342565b600060405180830381600087803b158015611ef457600080fd5b505af1158015611f08573d6000803e3d6000fd5b505050505b60c089015115610bd957611f5687611f2a8c8c6101800151612317565b846040518060400160405280600d81526020016c1b585ad95c919959505cdcd95d609a1b81525061294b565b6000611f60610e88565b6001600160a01b031663caf26389896040518263ffffffff1660e01b8152600401611f8b9190613342565b60206040518083038186803b158015611fa357600080fd5b505afa158015611fb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611fdb91908101906130b1565b9050611fe5610e88565b6001600160a01b03166377076855896040518263ffffffff1660e01b81526004016120109190613342565b60206040518083038186803b15801561202857600080fd5b505afa15801561203c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506120609190810190612e89565b15801561206d5750806001145b156120d85761207a610e88565b6001600160a01b03166319ab7f43896040518263ffffffff1660e01b81526004016120a59190613342565b600060405180830381600087803b1580156120bf57600080fd5b505af11580156120d3573d6000803e3d6000fd5b505050505b5050505050505050505050565b60006120f5826101400151610cde565b90506120ff610e88565b6001600160a01b031663fcfdcf8a84836040518363ffffffff1660e01b815260040161212c929190613356565b600060405180830381600087803b15801561214657600080fd5b505af115801561215a573d6000803e3d6000fd5b505050506121666126a1565b6001600160a01b03166371b580586040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156121a057600080fd5b505af11580156121b4573d6000803e3d6000fd5b505050506121c0610e88565b6001600160a01b031663195a261f84856001600160a01b0316639d3fa4b9866040518263ffffffff1660e01b81526004016121fb919061394b565b60606040518083038186803b15801561221357600080fd5b505afa158015612227573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061224b9190810190612efa565b602090810151604080518082018252600080825281850181905282516060810184528181529485018190528483015290516001600160e01b031960e087901b16815261229e9493600292916004016133d3565b600060405180830381600087803b1580156122b857600080fd5b505af11580156122cc573d6000803e3d6000fd5b50505050505050565b60006122df610e88565b6001600160a01b031663365a86fc6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c2757600080fd5b6020810151604051630c0e082160e31b81526000916001600160e01b031916906001600160a01b0385169063607041089061235690849060040161349b565b60206040518083038186803b15801561236e57600080fd5b505afa158015612382573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506123a69190810190612cea565b949350505050565b60006123b86122d5565b90506000816001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156123f557600080fd5b505afa158015612409573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061242d9190810190612cea565b905083866001600160a01b03166370a08231836040518263ffffffff1660e01b815260040161245c9190613342565b60206040518083038186803b15801561247457600080fd5b505afa158015612488573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506124ac91908101906130b1565b1015836040516020016124bf9190613286565b604051602081830303815290604052906124ec5760405162461bcd60e51b81526004016100e791906134b0565b5060405163f3fef3a360e01b81526001600160a01b0382169063f3fef3a39061251b9089908890600401613460565b600060405180830381600087803b15801561253557600080fd5b505af1158015612549573d6000803e3d6000fd5b5050604051636eb1769f60e11b8152600092506001600160a01b038916915063dd62ed3e9061257e9030908a90600401613356565b60206040518083038186803b15801561259657600080fd5b505afa1580156125aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506125ce91908101906130b1565b9050866001600160a01b031663095ea7b3876125ea8489612928565b6040518363ffffffff1660e01b8152600401612607929190613460565b602060405180830381600087803b15801561262157600080fd5b505af1158015612635573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506126599190810190612e89565b8460405160200161266a9190613309565b604051602081830303815290604052906126975760405162461bcd60e51b81526004016100e791906134b0565b5050505050505050565b60006126ab6122d5565b6001600160a01b0316639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c2757600080fd5b6000816001600160a01b031663850a15016040518163ffffffff1660e01b815260040160206040518083038186803b15801561271e57600080fd5b505afa158015612732573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506127569190810190612cea565b90506000612763836128ac565b90506001600160a01b0382161580612779575080155b15612785575050610d87565b600061278f6122d5565b90506000816001600160a01b0316639624e83e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156127cc57600080fd5b505afa1580156127e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506128049190810190612cea565b6001600160a01b031663bf53253b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561283c57600080fd5b505afa158015612850573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506128749190810190612cea565b90506128a58185856040518060400160405280600b81526020016a70726f746f636f6c46656560a81b8152506123ae565b5050505050565b6000611ac8826001600160a01b0316631ce4c78b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156128ea57600080fd5b505afa1580156128fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061292291908101906130b1565b3a611a91565b80820182811015611ac85760405162461bcd60e51b81526004016100e790613611565b604051636eb1769f60e11b81526000906001600160a01b0386169063dd62ed3e9061297c9030908890600401613356565b60206040518083038186803b15801561299457600080fd5b505afa1580156129a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506129cc91908101906130b1565b905060008184116129e6576129e18285611ace565b6129e8565b815b60405163095ea7b360e01b81529091506001600160a01b0387169063095ea7b390612a199088908590600401613460565b602060405180830381600087803b158015612a3357600080fd5b505af1158015612a47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250612a6b9190810190612e89565b83604051602001612a7c91906132c4565b604051602081830303815290604052906122cc5760405162461bcd60e51b81526004016100e791906134b0565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001606081526020016060815260200160608152602001606081525090565b604080516060810182526000808252602082018190529181019190915290565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b8035611ac881613a4b565b8051611ac881613a4b565b600082601f830112612bb1578081fd5b612bbb60806139b7565b9050808260005b6004811015612bed57612bd88683358701612c4a565b83526020928301929190910190600101612bc2565b50505092915050565b600082601f830112612c06578081fd5b610100612c12816139b7565b91508183858386011115612c2557600080fd5b600092505b6008831015612bed57803582526001929092019160209182019101612c2a565b600082601f830112612c5a578081fd5b8135612c6d612c68826139fb565b6139b7565b9150808252836020828501011115612c8457600080fd5b8060208401602084013760009082016020015292915050565b600082601f830112612cad578081fd5b8151612cbb612c68826139fb565b9150808252836020828501011115612cd257600080fd5b612ce3816020840160208601613a1f565b5092915050565b600060208284031215612cfb578081fd5b8151612d0681613a4b565b9392505050565b60008060008060808587031215612d22578283fd5b8451612d2d81613a4b565b6020860151909450612d3e81613a4b565b6040860151606090960151949790965092505050565b6000806000806000806102808789031215612d6d578384fd5b8635612d7881613a4b565b9550603f87018813612d88578384fd5b612d95612c6860086139de565b80602089016101208a018b811115612dab578788fd5b875b6008811015612dd557612dc08d84612b8b565b85526020948501949290920191600101612dad565b50829850612de38c82612bf6565b97505050505061022087013567ffffffffffffffff80821115612e04578384fd5b612e108a838b01612ba1565b94506102408901359350610260890135915080821115612e2e578283fd5b50612e3b89828a01612c4a565b9150509295509295509295565b600080600060608486031215612e5c578081fd5b8335612e6781613a4b565b9250602084013591506040840135612e7e81613a4b565b809150509250925092565b600060208284031215612e9a578081fd5b81518015158114612d06578182fd5b600060a08284031215612eba578081fd5b612ec460a06139b7565b82518152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b600060608284031215612f0b578081fd5b612f1560606139b7565b825160ff81168114612f25578283fd5b8152602083810151908201526040928301519281019290925250919050565b600060208284031215612f55578081fd5b815167ffffffffffffffff80821115612f6c578283fd5b6101c0918401808603831315612f80578384fd5b612f89836139b7565b612f938783612b96565b8152612fa28760208401612b96565b6020820152612fb48760408401612b96565b6040820152612fc68760608401612b96565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e0820152610100935083820151848201526101209350838201518482015261014093508382015183811115613022578586fd5b61302e88828501612c9d565b858301525061016093508382015183811115613048578586fd5b61305488828501612c9d565b85830152506101809350838201518381111561306e578586fd5b61307a88828501612c9d565b85830152506101a093508382015183811115613094578586fd5b6130a088828501612c9d565b948201949094529695505050505050565b6000602082840312156130c2578081fd5b5051919050565b6000806000606084860312156130dd578081fd5b8351925060208401519150604084015190509250925092565b600080600080600060a0868803121561310d578283fd5b855194506020860151935060408601519250606086015161312d81613a4b565b608087015190925061313e81613a4b565b809150509295509295909350565b6001600160a01b03169052565b60008151808452613171816020860160208601613a1f565b601f01601f19169290920160200192915050565b60006101c061319584845161314c565b60208301516131a7602086018261314c565b5060408301516131ba604086018261314c565b5060608301516131cd606086018261314c565b506080830151608085015260a083015160a085015260c083015160c085015260e083015160e085015261010080840151818601525061012080840151818601525061014080840151828287015261322683870182613159565b915050610160915081840151858203838701526132438282613159565b92505050610180808401518583038287015261325f8382613159565b9150506101a09150818401518582038387015261327c8282613159565b9695505050505050565b600075024b739bab33334b1b4b2b73a103130b630b731b29d160551b825282516132b7816016850160208701613a1f565b9190910160160192915050565b60007f5265766f6b6520617070726f76616c206661696c65643a200000000000000000825282516132fc816018850160208701613a1f565b9190910160180192915050565b600070020b8383937bb30b6103330b4b632b21d1607d1b82528251613335816011850160208701613a1f565b9190910160110192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b0396871681529486166020860152928516604085015293166060830152608082019290925260a081019190915260c00190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b6001600160a01b03868116825260208201869052610100820190600386106133f757fe5b60408301869052606083018560005b60028110156134275781518416835260209283019290910190600101613406565b50505060a0830190508360005b6003811015613453578151835260209283019290910190600101613434565b5050509695505050505050565b6001600160a01b03929092168252602082015260400190565b90815260200190565b6000838252604060208301526123a66040830184613185565b6001600160e01b031991909116815260200190565b600060208252612d066020830184613159565b60208082526015908201527464732d6d6174682d7375622d756e646572666c6f7760581b604082015260600190565b60208082526036908201527f54616b6572206173736574206461746120646f6573206e6f74206d61746368206040820152756f72646572206164647265737320696e20617272617960501b606082015260800190565b60208082526014908201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604082015260600190565b6020808252602b908201527f4d616b65722061737365742062616c616e636520646966666572656e7420746860408201526a185b88195e1c1958dd195960aa1b606082015260800190565b60208082526030908201527f46696c6c656420616d6f756e7420646f6573206e6f74206d617463682064657360408201526f1a5c995908199a5b1b08185b5bdd5b9d60821b606082015260800190565b60208082526014908201527364732d6d6174682d6164642d6f766572666c6f7760601b604082015260600190565b60208082526017908201527f494e56414c49445f4f524445525f5349474e4154555245000000000000000000604082015260600190565b60208082526037908201527f506173736564206964656e74696669657220646f6573206e6f74206d6174636860408201527f20746861742073746f72656420696e2054726164696e67000000000000000000606082015260800190565b6020808252603a908201527f54616b657220666565206173736574206461746120646f6573206e6f74206d6160408201527f746368206f72646572206164647265737320696e206172726179000000000000606082015260800190565b60208082526016908201527526b0b730b3b2b91036bab9ba1031329039b2b73232b960511b604082015260600190565b6020808252601b908201527f4f72646572205f7369676e617475726520697320696e76616c69640000000000604082015260600190565b6020808252602b908201527f5468697320617373657420697320616c726561647920696e20616e206f70656e60408201526a1036b0b5b29037b93232b960a91b606082015260800190565b60208082526019908201527f487562206d757374206e6f74206265207368757420646f776e00000000000000604082015260600190565b60208082526036908201527f4d616b6572206173736574206461746120646f6573206e6f74206d61746368206040820152756f72646572206164647265737320696e20617272617960501b606082015260800190565b6020808252601d908201527f4e6f2063616e63656c6c6174696f6e20636f6e646974696f6e206d6574000000604082015260600190565b6020808252603a908201527f4d616b657220666565206173736574206461746120646f6573206e6f74206d6160408201527f746368206f72646572206164647265737320696e206172726179000000000000606082015260800190565b60208082526028908201527f436f6f6c646f776e20666f7220746865206d616b6572206173736574206e6f74604082015267081c995858da195960c21b606082015260800190565b600060208252612d066020830184613185565b6000604082526139716040830185613185565b82810360208401526139838185613159565b95945050505050565b60006060825261399f6060830186613185565b846020840152828103604084015261327c8185613159565b60405181810167ffffffffffffffff811182821017156139d657600080fd5b604052919050565b600067ffffffffffffffff8211156139f4578081fd5b5060200290565b600067ffffffffffffffff821115613a11578081fd5b50601f01601f191660200190565b60005b83811015613a3a578181015183820152602001613a22565b838111156113725750506000910152565b6001600160a01b0381168114610d8757600080fdfea2646970667358221220fa4a35f8cfa870dd3f60f43ec555de886d104447d3ec028b467805c5f67435a164736f6c63430006010033';

export function deployZeroExV3Adapter(signer: ethers.Signer) {
  return ZeroExV3Adapter.deploy(ZeroExV3AdapterBytecode, signer);
}
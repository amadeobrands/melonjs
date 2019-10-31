import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { applyMixins } from '../../../utils/applyMixins';
import { Factory } from '../../factory/Factory';
import { ParticipationFactoryAbi } from '../../../abis/ParticipationFactory.abi';
import { ParticipationDeployArguments } from './Participation';

export class ParticipationFactory extends Contract {
  public static readonly abi = ParticipationFactoryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<ParticipationFactory>(environment, bytecode, from);
  }

  /**
   * Creates a ParticipationFactory instance.
   *
   * @param from The sender address.
   * @param args The participation deploy arguments as [[ParticipationDeployArguments]].
   */
  public createInstance(from: Address, args: ParticipationDeployArguments) {
    return this.createTransaction('createInstance', from, [args.hub, args.defaultAssets, args.registry]);
  }
}

export interface ParticipationFactory extends Factory {}
applyMixins(ParticipationFactory, [Factory]);

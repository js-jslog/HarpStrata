import { InteractionMatrix } from '../Interaction/types'
import { HalfstepIndexMatrix } from '../HalfstepIndex/types'

export enum ApparatusIds {
  MajorDiatonic = 'MAJOR-DIATONIC',
}

export interface Apparatus {
  readonly id: ApparatusIds;
  readonly halfsteps: HalfstepIndexMatrix;
  readonly interactions: InteractionMatrix;
}

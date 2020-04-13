import { InteractionMatrix } from '../Interaction/types'
import { HalfstepMatrix } from '../HalfstepIndex/types'

export enum ApparatusIds {
  MajorDiatonic = 'MAJOR-DIATONIC',
}

export interface Apparatus {
  readonly id: ApparatusIds;
  readonly halfsteps: HalfstepMatrix;
  readonly interactions: InteractionMatrix;
}

import { InteractionMatrix } from './Interaction/types'

export enum ApparatusIds {
  MajorDiatonic = 'MAJOR-DIATONIC',
}

type HalfstepRow = Array<number>
export type HalfstepMatrix = Array<HalfstepRow>

export interface Apparatus {
  id: ApparatusIds;
  halfsteps: HalfstepMatrix;
  interactions: InteractionMatrix;
}

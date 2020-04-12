import { InteractionMatrix } from './Interaction/types'

export enum ApparatusIds {
  MajorDiatonic = 'MAJOR-DIATONIC',
}

type HalfstepRow = ReadonlyArray<number>
export type HalfstepMatrix = ReadonlyArray<HalfstepRow>

export interface Apparatus {
  readonly id: ApparatusIds;
  readonly halfsteps: HalfstepMatrix;
  readonly interactions: InteractionMatrix;
}

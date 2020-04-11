import { InteractionMatrix } from './Interaction/types'

export enum LayoutIds {
  MajorDiatonic = 'MAJOR-DIATONIC',
}

type HalfstepRow = Array<number>
export type HalfstepMatrix = Array<HalfstepRow>

export interface HarpLayout {
  id: LayoutIds;
  halfsteps: HalfstepMatrix;
  interactions: InteractionMatrix;
}

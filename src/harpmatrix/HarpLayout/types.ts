import { InteractionMatrix } from './Interaction/types';

export enum LayoutIds {
  MajorDiatonic = 'MAJOR-DIATONIC',
};

interface HalfstepRow extends Array<number>{}
export interface HalfstepMatrix extends Array<HalfstepRow>{}

export interface HarpLayout {
  id: LayoutIds,
  halfsteps: HalfstepMatrix,
  interactions: InteractionMatrix,
};

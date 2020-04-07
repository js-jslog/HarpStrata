export enum Layouts {
  MajorDiatonic = 'MAJOR-DIATONIC',
};

export enum Interactions {
  Blow = 'BLOW',
  Draw = 'DRAW',
  Bend1 = 'BEND1',
  Bend2 = 'BEND2',
  Bend3 = 'BEND3',
  Overblow1 = 'OVERBLOW1',
};

interface InteractionRow extends Array<Interactions>{}
export interface InteractionMatrix extends Array<InteractionRow>{}

interface HalfstepRow extends Array<number>{}
export interface HalfstepMatrix extends Array<HalfstepRow>{}

export interface HarpLayout {
  id: Layouts,
  halfstepmatrix: HalfstepMatrix,
  interactionmatrix: InteractionMatrix,
};

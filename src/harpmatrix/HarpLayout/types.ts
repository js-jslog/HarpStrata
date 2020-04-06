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

interface PitchRow extends Array<number>{}
export interface PitchMatrix extends Array<PitchRow>{}

export interface HarpLayout {
  id: Layouts,
  pitchmatrix: PitchMatrix,
  interactionmatrix: InteractionMatrix,
};

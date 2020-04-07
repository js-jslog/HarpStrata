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

interface HalftoneRow extends Array<number>{}
export interface HalftoneMatrix extends Array<HalftoneRow>{}

export interface HarpLayout {
  id: Layouts,
  halftonematrix: HalftoneMatrix,
  interactionmatrix: InteractionMatrix,
};

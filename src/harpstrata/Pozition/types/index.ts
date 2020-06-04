export enum PozitionIdsa {
  First = 'FIRST',
  Eighth = 'EIGHTH',
  Third = 'THIRD',
  Tenth = 'TENTH',
  Fifth = 'FIFTH',
  Twelfth = 'TWELFTH',
  Seventh = 'SEVENTH',
  Second = 'SECOND',
  Ninth = 'NINTH',
  Fourth = 'FOURTH',
  Eleventh = 'ELEVENTH',
  Sixth = 'SIXTH',
}

export type Pozition = {
  readonly id: PozitionIds;
}

export type PozitionIds = PozitionIdsa
export const PozitionIds = { ...PozitionIdsa }

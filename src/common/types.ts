export type ScaleDegree = '1' | 'b2' | '2' | 'b3' | '3' | '4' | 'b5' | '5' | 'b6' | '6' | 'b7' | '7'
export interface HarpmatrixRow extends Array<ScaleDegree>{}
export interface Harpmatrix extends Array<HarpmatrixRow>{}

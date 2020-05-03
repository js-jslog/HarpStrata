import type { PitchMatrix } from '../../Pitch'
import type { DegreeMatrix } from '../../Degree'

export enum IsActiveIds {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type SiblingDisplayMatrices = [ DegreeMatrix, PitchMatrix ]

export type IsActiveRow = ReadonlyArray<IsActiveIds | undefined>
export type IsActiveMatrix = ReadonlyArray<IsActiveRow>

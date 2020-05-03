import type { PitchMatrix, PitchIds } from '../../Pitch'
import type { DegreeMatrix, DegreeIds } from '../../Degree'

export enum IsActiveIds {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type SiblingDisplayMatrices = [ DegreeMatrix, PitchMatrix ]
export type DisplayElementIds = ReadonlyArray<DegreeIds> | ReadonlyArray<PitchIds>

export type IsActiveRow = ReadonlyArray<IsActiveIds | undefined>
export type IsActiveMatrix = ReadonlyArray<IsActiveRow>

import type { ActiveIds, ActivePitchIds, ActiveDegreeIds } from '../getActiveIdsPair'
import type { PitchMatrix } from '../../Pitch'
import type { DegreeMatrix } from '../../Degree'

export enum IsActiveIds {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type IsActiveRow = ReadonlyArray<IsActiveIds | undefined>
export type IsActiveMatrix = ReadonlyArray<IsActiveRow>

export interface IsActiveProps {
  degreeMatrix: DegreeMatrix;
  pitchMatrix: PitchMatrix;
  activeIds: ActiveIds;
}

export type IsActiveComplex = {
  isActiveMatrix: IsActiveMatrix;
  activeDegreeIds: ActiveDegreeIds;
  activePitchIds: ActivePitchIds;
}

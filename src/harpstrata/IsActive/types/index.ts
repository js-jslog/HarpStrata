import type { IsActiveMatrix } from '../IsActiveMatrix'
import type { ActiveIds, ActivePitchIds, ActiveDegreeIds } from '../ActiveIds'
import type { PitchMatrix } from '../../Pitch'
import type { DegreeMatrix } from '../../Degree'


export type IsActiveProps = {
  degreeMatrix: DegreeMatrix;
  pitchMatrix: PitchMatrix;
  activeIds: ActiveIds;
}

export type IsActiveComplex = {
  isActiveMatrix: IsActiveMatrix;
  activeDegreeIds: ActiveDegreeIds;
  activePitchIds: ActivePitchIds;
}

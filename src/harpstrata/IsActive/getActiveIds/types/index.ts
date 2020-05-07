import { PitchIds } from '../../../Pitch'
import { DegreeIds } from '../../../Degree'

export type ActiveIds = {
  readonly activeDegreeIds: ReadonlyArray<DegreeIds>;
  readonly activePitchIds: ReadonlyArray<PitchIds>;
}

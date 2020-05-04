import type { Pitch, PitchIds } from '../../Pitch'
import type { Degree, DegreeIds } from '../../Degree'

export type ReducedState = {
  readonly degreeRow: Degree[];
  readonly activePitchIds: PitchIds[];
  readonly activeDegreeIds: DegreeIds[];
}

export const reducePitchRow = (reducedState: ReducedState, nextPitch: Pitch | undefined): ReducedState => {
  const { degreeRow, activePitchIds, activeDegreeIds } = reducedState
  const [ thisDegree, ...remainingDegreeRow ] = degreeRow

  if (thisDegree === undefined || nextPitch === undefined) return { ...reducedState, degreeRow: remainingDegreeRow }
  if (activeDegreeIds.includes(thisDegree.id)) return { ...reducedState, degreeRow: remainingDegreeRow }
  if (!activePitchIds.includes(nextPitch.id)) return { ...reducedState, degreeRow: remainingDegreeRow }

  return { ...reducedState, degreeRow: remainingDegreeRow, activeDegreeIds: [ ...activeDegreeIds, thisDegree.id ]}
}

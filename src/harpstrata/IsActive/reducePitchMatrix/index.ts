import type { Pitch, PitchRow, PitchIds } from '../../Pitch'
import type { DegreeRow, DegreeMatrix, DegreeIds } from '../../Degree'

export type ReducedRowState = {
  readonly degreeRow: DegreeRow;
  readonly activePitchIds: ReadonlyArray<PitchIds>;
  readonly activeDegreeIds: ReadonlyArray<DegreeIds>;
}
export type ReducedMatrixState = {
  readonly degreeMatrix: DegreeMatrix;
  readonly activePitchIds: ReadonlyArray<PitchIds>;
  readonly activeDegreeIds: ReadonlyArray<DegreeIds>;
}

export const reducePitchRow = (reducedState: ReducedRowState, nextPitch: Pitch | undefined): ReducedRowState => {
  const { degreeRow, activePitchIds, activeDegreeIds } = reducedState
  const [ thisDegree, ...remainingDegreeRow ] = degreeRow

  if (thisDegree === undefined || nextPitch === undefined) return { ...reducedState, degreeRow: remainingDegreeRow }
  if (activeDegreeIds.includes(thisDegree.id)) return { ...reducedState, degreeRow: remainingDegreeRow }
  if (!activePitchIds.includes(nextPitch.id)) return { ...reducedState, degreeRow: remainingDegreeRow }

  return { ...reducedState, degreeRow: remainingDegreeRow, activeDegreeIds: [ ...activeDegreeIds, thisDegree.id ]}
}

export const reducePitchMatrix = (reducedState: ReducedMatrixState, nextPitchRow: PitchRow): ReducedMatrixState => {
  const { degreeMatrix, activePitchIds, activeDegreeIds } = reducedState
  const [ thisDegreeRow, ...remainingDegreeMatrix ] = degreeMatrix

  const initialState: ReducedRowState = {
    activePitchIds, activeDegreeIds, degreeRow: thisDegreeRow
  }

  const reducedRow: ReducedRowState = nextPitchRow.reduce(reducePitchRow, initialState)

  const reducedMatrix: ReducedMatrixState = {
    degreeMatrix: remainingDegreeMatrix,
    activePitchIds: reducedRow.activePitchIds,
    activeDegreeIds: reducedRow.activeDegreeIds,
  }

  return reducedMatrix
}

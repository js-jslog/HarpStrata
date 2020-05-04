import type { Pitch, PitchRow, PitchMatrix, PitchIds } from '../../Pitch'
import type { Degree, DegreeRow, DegreeMatrix, DegreeIds } from '../../Degree'

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
export type ReducedDegreeRowState = {
  readonly pitchRow: PitchRow;
  readonly activePitchIds: ReadonlyArray<PitchIds>;
  readonly activeDegreeIds: ReadonlyArray<DegreeIds>;
}
export type ReducedDegreeMatrixState = {
  readonly pitchMatrix: PitchMatrix;
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

  if (activePitchIds.length === activeDegreeIds.length) return reducedState

  const reducedRow: ReducedRowState = nextPitchRow.reduce(reducePitchRow, initialState)

  const reducedMatrix: ReducedMatrixState = {
    degreeMatrix: remainingDegreeMatrix,
    activePitchIds: reducedRow.activePitchIds,
    activeDegreeIds: reducedRow.activeDegreeIds,
  }

  return reducedMatrix
}

export const reduceDegreeRow = (reducedState: ReducedDegreeRowState, nextDegree: Degree | undefined): ReducedDegreeRowState => {
  const { pitchRow, activePitchIds, activeDegreeIds } = reducedState
  const [ thisPitch, ...remainingPitchRow ] = pitchRow

  if (thisPitch === undefined || nextDegree === undefined) return { ...reducedState, pitchRow: remainingPitchRow }
  if (activePitchIds.includes(thisPitch.id)) return { ...reducedState, pitchRow: remainingPitchRow }
  if (!activeDegreeIds.includes(nextDegree.id)) return { ...reducedState, pitchRow: remainingPitchRow }

  return { ...reducedState, pitchRow: remainingPitchRow, activePitchIds: [ ...activePitchIds, thisPitch.id ]}
}

export const reduceDegreeMatrix = (reducedState: ReducedDegreeMatrixState, nextDegreeRow: DegreeRow): ReducedDegreeMatrixState => {
  const { pitchMatrix, activePitchIds, activeDegreeIds } = reducedState
  const [ thisPitchRow, ...remainingPitchMatrix ] = pitchMatrix

  const initialState: ReducedDegreeRowState = {
    activePitchIds, activeDegreeIds, pitchRow: thisPitchRow
  }

  if (activePitchIds.length === activeDegreeIds.length) return reducedState

  const reducedRow: ReducedDegreeRowState = nextDegreeRow.reduce(reduceDegreeRow, initialState)

  const reducedMatrix: ReducedDegreeMatrixState = {
    pitchMatrix: remainingPitchMatrix,
    activePitchIds: reducedRow.activePitchIds,
    activeDegreeIds: reducedRow.activeDegreeIds,
  }

  return reducedMatrix
}

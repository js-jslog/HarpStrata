import type { Pitch, PitchRow, PitchMatrix, PitchIds } from '../../Pitch'
import type { Degree, DegreeRow, DegreeMatrix, DegreeIds } from '../../Degree'

export type RowAccumulator = {
  readonly degreeRow: DegreeRow;
  readonly pitchRow: PitchRow;
  readonly activeDegreeIds: ReadonlyArray<DegreeIds>;
  readonly activePitchIds: ReadonlyArray<PitchIds>;
}

export type MatrixAccumulator = {
  readonly degreeMatrix: DegreeMatrix;
  readonly pitchMatrix: PitchMatrix;
  readonly activeDegreeIds: ReadonlyArray<DegreeIds>;
  readonly activePitchIds: ReadonlyArray<PitchIds>;
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

export const reducePitchesRowToActives = (accumulator: RowAccumulator, nextPitch: Pitch | undefined): RowAccumulator => {
  const { degreeRow, activePitchIds, activeDegreeIds } = accumulator
  const [ thisDegree, ...remainingDegreeRow ] = degreeRow

  if (thisDegree === undefined || nextPitch === undefined) return { ...accumulator, degreeRow: remainingDegreeRow }
  if (activeDegreeIds.includes(thisDegree.id)) return { ...accumulator, degreeRow: remainingDegreeRow }
  if (!activePitchIds.includes(nextPitch.id)) return { ...accumulator, degreeRow: remainingDegreeRow }

  return { ...accumulator, degreeRow: remainingDegreeRow, activeDegreeIds: [ ...activeDegreeIds, thisDegree.id ]}
}

export const reducePitchesMatrixToActives = (accumulator: MatrixAccumulator, nextPitchRow: PitchRow): MatrixAccumulator => {
  const { degreeMatrix, activePitchIds, activeDegreeIds } = accumulator
  const [ thisDegreeRow, ...remainingDegreeMatrix ] = degreeMatrix

  const initialState: RowAccumulator = {
    activePitchIds, activeDegreeIds, degreeRow: thisDegreeRow, pitchRow: nextPitchRow
  }

  if (activePitchIds.length === activeDegreeIds.length) return accumulator

  const reducedRow: RowAccumulator = nextPitchRow.reduce(reducePitchesRowToActives, initialState)

  return {
    ...accumulator,
    degreeMatrix: remainingDegreeMatrix,
    activePitchIds: reducedRow.activePitchIds,
    activeDegreeIds: reducedRow.activeDegreeIds,
  }
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

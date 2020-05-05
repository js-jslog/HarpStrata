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

export const reducePitchRowForActiveIds = (accumulator: RowAccumulator, nextPitch: Pitch | undefined): RowAccumulator => {
  const { degreeRow, activePitchIds, activeDegreeIds } = accumulator
  const [ thisDegree, ...remainingDegreeRow ] = degreeRow

  if (thisDegree === undefined || nextPitch === undefined) return { ...accumulator, degreeRow: remainingDegreeRow }
  if (activeDegreeIds.includes(thisDegree.id)) return { ...accumulator, degreeRow: remainingDegreeRow }
  if (!activePitchIds.includes(nextPitch.id)) return { ...accumulator, degreeRow: remainingDegreeRow }

  return { ...accumulator, degreeRow: remainingDegreeRow, activeDegreeIds: [ ...activeDegreeIds, thisDegree.id ]}
}

export const reducePitchMatrixForActiveIds = (accumulator: MatrixAccumulator, nextPitchRow: PitchRow): MatrixAccumulator => {
  const { degreeMatrix, activePitchIds, activeDegreeIds } = accumulator
  const [ thisDegreeRow, ...remainingDegreeMatrix ] = degreeMatrix

  const initialState: RowAccumulator = {
    activePitchIds, activeDegreeIds, degreeRow: thisDegreeRow, pitchRow: nextPitchRow
  }

  if (activePitchIds.length === activeDegreeIds.length) return accumulator

  const reducedRow: RowAccumulator = nextPitchRow.reduce(reducePitchRowForActiveIds, initialState)

  return {
    ...accumulator,
    degreeMatrix: remainingDegreeMatrix,
    activePitchIds: reducedRow.activePitchIds,
    activeDegreeIds: reducedRow.activeDegreeIds,
  }
}

export const reduceDegreeRowForActiveIds = (accumulator: RowAccumulator, nextDegree: Degree | undefined): RowAccumulator => {
  const { pitchRow, activePitchIds, activeDegreeIds } = accumulator
  const [ thisPitch, ...remainingPitchRow ] = pitchRow

  if (thisPitch === undefined || nextDegree === undefined) return { ...accumulator, pitchRow: remainingPitchRow }
  if (activePitchIds.includes(thisPitch.id)) return { ...accumulator, pitchRow: remainingPitchRow }
  if (!activeDegreeIds.includes(nextDegree.id)) return { ...accumulator, pitchRow: remainingPitchRow }

  return { ...accumulator, pitchRow: remainingPitchRow, activePitchIds: [ ...activePitchIds, thisPitch.id ]}
}

export const reduceDegreeMatrixForActiveIds = (accumulator: MatrixAccumulator, nextDegreeRow: DegreeRow): MatrixAccumulator => {
  const { pitchMatrix, activePitchIds, activeDegreeIds } = accumulator
  const [ thisPitchRow, ...remainingPitchMatrix ] = pitchMatrix

  const initialState: RowAccumulator = {
    activePitchIds, activeDegreeIds, pitchRow: thisPitchRow, degreeRow: nextDegreeRow
  }

  if (activePitchIds.length === activeDegreeIds.length) return accumulator

  const reducedRow: RowAccumulator = nextDegreeRow.reduce(reduceDegreeRowForActiveIds, initialState)

  return {
    ...accumulator,
    pitchMatrix: remainingPitchMatrix,
    activePitchIds: reducedRow.activePitchIds,
    activeDegreeIds: reducedRow.activeDegreeIds,
  }
}

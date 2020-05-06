import type { RowAccumulator } from '../reduceDisplayValueRowForActiveIds'
import { reduceDegreeRowForActiveIds, reducePitchRowForActiveIds } from '../reduceDisplayValueRowForActiveIds'
import type { PitchRow, PitchMatrix, PitchIds } from '../../../../../Pitch'
import type { DegreeRow, DegreeMatrix, DegreeIds } from '../../../../../Degree'

export type MatrixAccumulator = {
  readonly degreeMatrix: DegreeMatrix;
  readonly pitchMatrix: PitchMatrix;
  readonly activeDegreeIds: ReadonlyArray<DegreeIds>;
  readonly activePitchIds: ReadonlyArray<PitchIds>;
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
    activePitchIds: [ ...reducedRow.activePitchIds ].sort(),
    activeDegreeIds: [ ...reducedRow.activeDegreeIds ].sort(),
  }
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
    activePitchIds: [ ...reducedRow.activePitchIds ].sort(),
    activeDegreeIds: [ ...reducedRow.activeDegreeIds ].sort(),
  }
}

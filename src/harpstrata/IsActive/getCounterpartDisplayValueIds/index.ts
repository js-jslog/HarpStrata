import { SiblingDisplayMatrices } from '../types'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

import { reducePitchMatrixForActiveIds, reduceDegreeMatrixForActiveIds } from './reduceDisplayValueMatricesForActiveIds'


export const getCounterpartDegreeIds = (siblingDisplayMatrices: SiblingDisplayMatrices, activePitchIds: ReadonlyArray<PitchIds>): ReadonlyArray<DegreeIds> => {
  const [ degreeMatrix, pitchMatrix ] = siblingDisplayMatrices
  const initialState = { pitchMatrix, degreeMatrix, activePitchIds, activeDegreeIds: [] }
  const reducedState = pitchMatrix.reduce(reducePitchMatrixForActiveIds, initialState)
  const { activeDegreeIds } = reducedState

  return activeDegreeIds
}

export const getCounterpartPitchIds = (siblingDisplayMatrices: SiblingDisplayMatrices, activeDegreeIds: ReadonlyArray<DegreeIds>): ReadonlyArray<PitchIds> => {
  const [ degreeMatrix, pitchMatrix ] = siblingDisplayMatrices
  const initialState = { degreeMatrix, pitchMatrix, activePitchIds: [], activeDegreeIds }
  const reducedState = degreeMatrix.reduce(reduceDegreeMatrixForActiveIds, initialState)
  const { activePitchIds } = reducedState

  return activePitchIds
}

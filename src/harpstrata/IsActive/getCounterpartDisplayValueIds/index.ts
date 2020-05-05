import { IsActiveProps } from '../types'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

import { reducePitchMatrixForActiveIds, reduceDegreeMatrixForActiveIds } from './reduceDisplayValueMatricesForActiveIds'


export const getCounterpartDegreeIds = (props: IsActiveProps): ReadonlyArray<DegreeIds> => {
  const { degreeMatrix, pitchMatrix, activeElementIds } = props
  const activePitchIds = activeElementIds as ReadonlyArray<PitchIds>
  const initialState = { pitchMatrix, degreeMatrix, activePitchIds, activeDegreeIds: [] }
  const reducedState = pitchMatrix.reduce(reducePitchMatrixForActiveIds, initialState)
  const { activeDegreeIds } = reducedState

  return activeDegreeIds
}

export const getCounterpartPitchIds = (props: IsActiveProps): ReadonlyArray<PitchIds> => {
  const { degreeMatrix, pitchMatrix, activeElementIds } = props
  const activeDegreeIds = activeElementIds as ReadonlyArray<DegreeIds>
  const initialState = { degreeMatrix, pitchMatrix, activePitchIds: [], activeDegreeIds }
  const reducedState = degreeMatrix.reduce(reduceDegreeMatrixForActiveIds, initialState)
  const { activePitchIds } = reducedState

  return activePitchIds
}

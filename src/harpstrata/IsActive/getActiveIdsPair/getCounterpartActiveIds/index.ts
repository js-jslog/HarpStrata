import type { ActivePitchIds, ActiveDegreeIds } from '../types'
import type { IsActiveProps } from '../../types'

import { activeIdsFromPitchMatrix, activeIdsFromDegreeMatrix } from './activeIdsFromMatrixReducers'


export const getCounterpartDegreeIds = (props: IsActiveProps): ActiveDegreeIds => {
  const { degreeMatrix, pitchMatrix, activeIds } = props
  const activePitchIds = activeIds as ActivePitchIds
  const initialState = { pitchMatrix, degreeMatrix, activePitchIds, activeDegreeIds: [] as ActiveDegreeIds }
  const reducedState = pitchMatrix.reduce(activeIdsFromPitchMatrix, initialState)
  const { activeDegreeIds } = reducedState

  return activeDegreeIds
}

export const getCounterpartPitchIds = (props: IsActiveProps): ActivePitchIds => {
  const { degreeMatrix, pitchMatrix, activeIds } = props
  const activeDegreeIds = activeIds as ActiveDegreeIds
  const initialState = { degreeMatrix, pitchMatrix, activePitchIds: [] as ActivePitchIds, activeDegreeIds }
  const reducedState = degreeMatrix.reduce(activeIdsFromDegreeMatrix, initialState)
  const { activePitchIds } = reducedState

  return activePitchIds
}

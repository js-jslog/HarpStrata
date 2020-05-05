import type { Pitch, PitchRow } from '../Pitch'
import { PitchIds } from '../Pitch'
import type { Degree, DegreeRow } from '../Degree'
import { DegreeIds } from '../Degree'

import { reducePitchMatrixForActiveIds, reduceDegreeMatrixForActiveIds } from './reduceDisplayValueMatricesForActiveIds'

import { SiblingDisplayMatrices, IsActiveIds, IsActiveRow, IsActiveMatrix } from './types'

const getIsActiveMatrixForDegrees = (siblingDisplayMatrices: SiblingDisplayMatrices, activeElementIds: ReadonlyArray<DegreeIds>): IsActiveMatrix => {
  const [ degreeMatrix ] = siblingDisplayMatrices
  const mapDegree = (degree: Degree | undefined): IsActiveIds | undefined => (
    degree && activeElementIds.includes(degree.id) ? IsActiveIds.Active : IsActiveIds.Inactive
  )
  const mapDegreeRow = (degreeRow: DegreeRow): IsActiveRow => (degreeRow.map(mapDegree))

  const isActiveMatrix: IsActiveMatrix = degreeMatrix.map(mapDegreeRow)
  return isActiveMatrix
}

const getIsActiveMatrixForPitches = (siblingDisplayMatrices: SiblingDisplayMatrices, activeElementIds: ReadonlyArray<PitchIds>): IsActiveMatrix => {
  const [ , pitchMatrix ] = siblingDisplayMatrices
  const mapPitch = (pitch: Pitch | undefined): IsActiveIds | undefined => (
    pitch && activeElementIds.includes(pitch.id) ? IsActiveIds.Active : IsActiveIds.Inactive
  )
  const mapPitchRow = (pitch: PitchRow): IsActiveRow => (pitch.map(mapPitch))

  const isActiveMatrix: IsActiveMatrix = pitchMatrix.map(mapPitchRow)
  return isActiveMatrix
}

export const getIsActiveMatrix = (siblingDisplayMatrices: SiblingDisplayMatrices, activeElementIds: ReadonlyArray<DegreeIds> | ReadonlyArray<PitchIds>): IsActiveMatrix => {
  if (activeElementIds[0] in Object.values(DegreeIds)) {
    const activeDegreeIds = activeElementIds as ReadonlyArray<DegreeIds>
    return getIsActiveMatrixForDegrees(siblingDisplayMatrices, activeDegreeIds)
  }
  const activePitchIds = activeElementIds as ReadonlyArray<PitchIds>
  return getIsActiveMatrixForPitches(siblingDisplayMatrices, activePitchIds)
}

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

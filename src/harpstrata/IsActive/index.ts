import type { Pitch, PitchRow } from '../Pitch'
import { PitchIds } from '../Pitch'
import type { Degree, DegreeRow } from '../Degree'
import { DegreeIds } from '../Degree'

import { SiblingDisplayMatrices, IsActiveIds, IsActiveRow, IsActiveMatrix } from './types'

export const getIsActiveMatrixForDegrees = (siblingDisplayMatrices: SiblingDisplayMatrices, activeElementIds: ReadonlyArray<DegreeIds>): IsActiveMatrix => {
  const [ degreeMatrix ] = siblingDisplayMatrices
  const mapDegree = (degree: Degree | undefined): IsActiveIds | undefined => (
    degree && activeElementIds.includes(degree.id) ? IsActiveIds.Active : IsActiveIds.Inactive
  )
  const mapDegreeRow = (degreeRow: DegreeRow): IsActiveRow => (degreeRow.map(mapDegree))

  const isActiveMatrix: IsActiveMatrix = degreeMatrix.map(mapDegreeRow)
  return isActiveMatrix
}

export const getIsActiveMatrixForPitches = (siblingDisplayMatrices: SiblingDisplayMatrices, activeElementIds: ReadonlyArray<PitchIds>): IsActiveMatrix => {
  const [ , pitchMatrix ] = siblingDisplayMatrices
  const mapPitch = (pitch: Pitch | undefined): IsActiveIds | undefined => (
    pitch && activeElementIds.includes(pitch.id) ? IsActiveIds.Active : IsActiveIds.Inactive
  )
  const mapPitchRow = (pitch: PitchRow): IsActiveRow => (pitch.map(mapPitch))

  const isActiveMatrix: IsActiveMatrix = pitchMatrix.map(mapPitchRow)
  return isActiveMatrix
}

import { DegreeIds, Degree, DegreeRow } from '../Degree'

import { SiblingDisplayMatrices, DisplayElementIds, IsActiveIds, IsActiveRow, IsActiveMatrix } from './types'

export const getIsActiveMatrix = (siblingDisplayMatrices: SiblingDisplayMatrices, activeElementIds: DegreeIds[]): IsActiveMatrix => {
  const [ degreeMatrix ] = siblingDisplayMatrices
  const mapDegree = (degree: Degree | undefined): IsActiveIds | undefined => (
    degree && activeElementIds.includes(degree.id) ? IsActiveIds.Active : IsActiveIds.Inactive
  )
  const mapDegreeRow = (degreeRow: DegreeRow): IsActiveRow => (degreeRow.map(mapDegree))

  const isActiveMatrix: IsActiveMatrix = degreeMatrix.map(mapDegreeRow)
  return isActiveMatrix
}

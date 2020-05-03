import { DegreeIds, Degree, DegreeRow } from '../Degree'

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

import { getDegreeMatrix } from './Degree'
import { getHarpLayouts, getHarpLayout } from './HarpLayout'
import { LayoutIds } from './HarpLayout/types'
import { DegreeMatrix } from './Degree/types'

const getLayouts = getHarpLayouts

const positionMap = {
  first: 0,
  second: 7,
}
const getHarpmatrix = (layout: LayoutIds, position: string): DegreeMatrix => {
  const { halfsteps } = getHarpLayout(layout)

  return getDegreeMatrix(halfsteps, positionMap[position])
}

enum Positions {
  First = 'FIRST',
  Second = 'SECOND',
}
const getPositions = (): Positions[] => [
  Positions.First,
  Positions.Second,
]


export {
  getLayouts,
  getPositions,
  getHarpmatrix,
  Positions,
}


import { getDegreeMatrix } from './Degree'
import { getApparatusIds, getApparatus } from './Apparatus'
import { LayoutIds } from './Apparatus/types'
import { HarpStrata } from './types'

const getLayouts = getApparatusIds

const positionMap = {
  first: 0,
  second: 7,
}

const getHarpStrata = (layoutId: LayoutIds, position: string): HarpStrata => {
  const layout = getApparatus(layoutId)
  const degrees = getDegreeMatrix(layout.halfsteps, positionMap[position])

  return {
    layout,
    degrees,
  }
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
  Positions,
  getHarpStrata
}


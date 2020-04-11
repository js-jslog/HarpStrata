import { getDegreeMatrix } from './Degree'
import { getHarpLayouts, getHarpLayout } from './HarpLayout'
import { LayoutIds } from './HarpLayout/types'
import { HarpStrata } from './types'

const getLayouts = getHarpLayouts

const positionMap = {
  first: 0,
  second: 7,
}

const getHarpStrata = (layoutId: LayoutIds, position: string): HarpStrata => {
  const layout = getHarpLayout(layoutId)
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


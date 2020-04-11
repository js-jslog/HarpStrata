import { getDegreeMatrix } from './Degree'
import { getActiveApparatusIds, getApparatus } from './Apparatus'
import { ApparatusIds } from './Apparatus/types'
import { HarpStrata } from './types'

const getLayouts = getActiveApparatusIds

const positionMap = {
  first: 0,
  second: 7,
}

const getHarpStrata = (apparatusId: ApparatusIds, position: string): HarpStrata => {
  const apparatus = getApparatus(apparatusId)
  const degrees = getDegreeMatrix(apparatus.halfsteps, positionMap[position])

  return {
    apparatus,
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


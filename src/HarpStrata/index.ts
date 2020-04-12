import { getDegreeMatrix } from './Degree'
import { getActiveApparatusIds, getApparatus } from './Apparatus'
import { ApparatusIds } from './Apparatus/types'
import { HarpStrata } from './types'
import { PositionIds } from './Position/types'

export const getHarpIds = getActiveApparatusIds

const positionMap = {
  first: 0,
  second: 7,
}

export const getHarpStrata = (apparatusId: ApparatusIds, position: string): HarpStrata => {
  const apparatus = getApparatus(apparatusId)
  const degrees = getDegreeMatrix(apparatus.halfsteps, positionMap[position])

  return {
    apparatus,
    degrees,
  }
}

export const getPositions = (): PositionIds[] => [
  PositionIds.First,
  PositionIds.Second,
]

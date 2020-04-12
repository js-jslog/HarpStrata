import { PositionIds } from './Position/types'
import { getPosition } from './Position'
import { getDegreeMatrix } from './Degree'
import { ApparatusIds } from './Apparatus/types'
import { getActiveApparatusIds, getApparatus } from './Apparatus'

import { HarpStrata } from './types'

export const getHarpIds = getActiveApparatusIds

export const getHarpStrata = (apparatusId: ApparatusIds, positionId: PositionIds): HarpStrata => {
  const apparatus = getApparatus(apparatusId)
  const position = getPosition(positionId)
  const degrees = getDegreeMatrix(apparatus.halfsteps, position.root)

  return {
    apparatus,
    degrees,
  }
}

export const getPositions = (): PositionIds[] => [
  PositionIds.First,
  PositionIds.Second,
]

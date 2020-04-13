import { PositionIds } from './Position/types'
import { getActivePositionIds, getPosition } from './Position'
import { getDegreeMatrix } from './Degree'
import { ApparatusIds } from './Apparatus/types'
import { getActiveApparatusIds, getApparatus } from './Apparatus'

import { HarpStrata } from './types'


export const getHarpIds = getActiveApparatusIds

export const getPositions = getActivePositionIds

export const getHarpStrata = (apparatusId: ApparatusIds, positionId: PositionIds): HarpStrata => {
  const apparatus = getApparatus(apparatusId)
  const position = getPosition(positionId)
  const degreeMatrix = getDegreeMatrix(apparatus.halfstepIndexMatrix, position.root)

  return {
    apparatus,
    degreeMatrix,
  }
}

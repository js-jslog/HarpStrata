import { PozitionIds } from './Pozition/types'
import { getActivePozitionIds, getPozition } from './Pozition'
import { getDegreeMatrix } from './Degree'
import { ApparatusIds } from './Apparatus/types'
import { getActiveApparatusIds, getApparatus } from './Apparatus'

import { HarpStrata } from './types'


export const getHarpIds = getActiveApparatusIds

export const getPozitions = getActivePozitionIds

export const getHarpStrata = (apparatusId: ApparatusIds, positionId: PozitionIds): HarpStrata => {
  const apparatus = getApparatus(apparatusId)
  const position = getPozition(positionId)
  const degreeMatrix = getDegreeMatrix(apparatus.halfstepIndexMatrix, position.root)

  return {
    apparatus,
    degreeMatrix,
  }
}

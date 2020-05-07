import { getActivePozitionIds, getPozition } from './Pozition'
import { getPitchMatrix, getActivePitchIds, getPitch } from './Pitch'
import { getIsActiveComplex } from './IsActive'
import { getDegreeMatrix } from './Degree'
import type { DegreeIds } from './Degree'
import { getActiveApparatusIds, getApparatus } from './Apparatus'

import type { HarpStrata, PozitionIds, ApparatusIds, PitchIds } from './types'


export const getApparatusIds = getActiveApparatusIds

export const getPozitionIds = getActivePozitionIds

export const getPitchIds = getActivePitchIds

export const getHarpStrata = (apparatusId: ApparatusIds, pozitionId: PozitionIds, keyPitchId: PitchIds, activeIds: ReadonlyArray<DegreeIds> | ReadonlyArray<PitchIds>): HarpStrata => {
  const apparatus = getApparatus(apparatusId)
  const pozition = getPozition(pozitionId)
  const pitch = getPitch(keyPitchId)
  const degreeMatrix = getDegreeMatrix(apparatus.halfstepIndexMatrix, pozition.root)
  const pitchMatrix = getPitchMatrix(apparatus.halfstepIndexMatrix, pitch.id)
  const isActiveComplex = getIsActiveComplex({degreeMatrix, pitchMatrix, activeIds: activeIds })

  return {
    apparatus,
    degreeMatrix,
    pitchMatrix,
    isActiveComplex,
  }
}

export {
  HarpStrata,
  ApparatusIds,
  Apparatus,
  InteractionIds,
  Interaction,
  InteractionRow,
  InteractionMatrix,
  HalfstepIndex,
  HalfstepIndexRow,
  HalfstepIndexMatrix,
  DegreeIds,
  Degree,
  DegreeRow,
  DegreeMatrix,
  PozitionIds,
  Pozition,
  PitchIds,
  Pitch
} from './types'

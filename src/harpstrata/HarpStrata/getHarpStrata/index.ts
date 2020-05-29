import type { HarpStrataProps, HarpStrata } from '../types'
import { getPitchMatrix, getPitch } from '../../Pitch'
import { getPozitionRootOffset } from '../../OrderedIds'
import { getIsActiveComplex } from '../../IsActive'
import { getDegreeMatrix } from '../../Degree'
import { getCovariants } from '../../Covariant'
import { getApparatus } from '../../Apparatus'

export const getHarpStrata = (props: HarpStrataProps): HarpStrata => {
  const { apparatusId, pozitionId, harpKeyId, activeIds } = props

  const apparatus = getApparatus(apparatusId)
  const pozitionRoot = getPozitionRootOffset(pozitionId)
  const pitch = getPitch(harpKeyId)

  const { halfstepIndexMatrix } = apparatus
  const { id: pitchId } = pitch

  const degreeMatrix = getDegreeMatrix(halfstepIndexMatrix, pozitionRoot)
  const pitchMatrix = getPitchMatrix(halfstepIndexMatrix, pitchId)
  const isActiveComplex = getIsActiveComplex({degreeMatrix, pitchMatrix, activeIds: activeIds })

  const { rootPitchId } = getCovariants({pozitionId, harpKeyId})

  return {
    apparatus,
    degreeMatrix,
    pitchMatrix,
    isActiveComplex,
    pozitionId,
    rootPitchId,
    harpKeyId,
  }
}

import type { HarpKeyControlVars, RootPitchControlVars, PozitionControlVars } from '../types'
import type { GenericControlVars, CovariateGroup } from '../types'
import { isPozitionControlVars } from '../types'
import { deduceRootPitchId } from '../deduceRootPitchId'
import { deducePozitionId } from '../deducePozitionId'
import { deduceHarpKeyId } from '../deduceHarpKeyId'


export const getCovariants = (controlVariables: GenericControlVars): CovariateGroup => {
  const keyPitchControlVars = controlVariables as HarpKeyControlVars
  const rootPitchControlVars = controlVariables as RootPitchControlVars
  const pozitionControlVars = controlVariables as PozitionControlVars
  if (keyPitchControlVars.rootPitchId && keyPitchControlVars.pozitionId) {
    const { rootPitchId, pozitionId } = keyPitchControlVars
    const harpKeyId = deduceHarpKeyId(keyPitchControlVars)

    return { harpKeyId, pozitionId, rootPitchId }
  } else if (isPozitionControlVars(controlVariables)) {
    const { rootPitchId, harpKeyId } = pozitionControlVars
    const pozitionId = deducePozitionId(pozitionControlVars)

    return { harpKeyId, pozitionId, rootPitchId }
  } else {
    const { harpKeyId, pozitionId } = rootPitchControlVars
    const rootPitchId = deduceRootPitchId(rootPitchControlVars)

    return { harpKeyId, pozitionId, rootPitchId }
  }
}

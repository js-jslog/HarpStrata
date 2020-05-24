import type { HarpKeyControlVars, RootPitchControlVars, PozitionControlVars } from '../types'
import type { GenericControlVars, CovariateGroup } from '../types'
import { deduceRootPitchId } from '../deduceRootPitchId'
import { deducePozitionId } from '../deducePozitionId'
import { deduceHarpKeyId } from '../deduceHarpKeyId'


export const getCovariants = (controlVariables: GenericControlVars): CovariateGroup => {
  const deduceKeyPitchProps = controlVariables as HarpKeyControlVars
  const deduceRootPitchProps = controlVariables as RootPitchControlVars
  const deducePozitionIdProps = controlVariables as PozitionControlVars
  if (deduceKeyPitchProps.rootPitchId && deduceKeyPitchProps.pozitionId) {
    const { rootPitchId, pozitionId } = deduceKeyPitchProps
    const harpKeyId = deduceHarpKeyId(deduceKeyPitchProps)

    return { harpKeyId, pozitionId, rootPitchId }
  } else if (deducePozitionIdProps.rootPitchId && deducePozitionIdProps.harpKeyId) {
    const { rootPitchId, harpKeyId } = deducePozitionIdProps
    const pozitionId = deducePozitionId(deducePozitionIdProps)

    return { harpKeyId, pozitionId, rootPitchId }
  } else {
    const { harpKeyId, pozitionId } = deduceRootPitchProps
    const rootPitchId = deduceRootPitchId(deduceRootPitchProps)

    return { harpKeyId, pozitionId, rootPitchId }
  }
}

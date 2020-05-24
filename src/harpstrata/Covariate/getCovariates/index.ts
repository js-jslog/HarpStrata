import { DeduceRootPitchProps } from '../deduceRootPitchId'
import { deduceRootPitchId } from '../deduceRootPitchId'
import { DeduceKeyPitchProps } from '../deduceHarpKeyId'
import { deduceHarpKeyId } from '../deduceHarpKeyId'
import { PozitionIds } from '../../Pozition'
import { PitchIds } from '../../Pitch'

type Covariates = {
  readonly harpKeyId: PitchIds;
  readonly rootPitchId: PitchIds;
  readonly pozitionId: PozitionIds;
}
type ControlVariables = DeduceRootPitchProps | DeduceKeyPitchProps

export const getCovariates = (controlVariables: ControlVariables): Covariates => {
  const deduceKeyPitchProps = controlVariables as DeduceKeyPitchProps
  const deduceRootPitchProps = controlVariables as DeduceRootPitchProps
  if (deduceKeyPitchProps.rootPitchId && deduceKeyPitchProps.pozitionId) {
    const { rootPitchId, pozitionId } = deduceKeyPitchProps
    const harpKeyId = deduceHarpKeyId(deduceKeyPitchProps)

    return { harpKeyId, pozitionId, rootPitchId }
  } else {
    const { harpKeyId, pozitionId } = deduceRootPitchProps
    const rootPitchId = deduceRootPitchId(deduceRootPitchProps)

    return { harpKeyId, pozitionId, rootPitchId }
  }
}

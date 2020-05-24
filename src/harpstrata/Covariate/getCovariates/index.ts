import { DeduceRootPitchProps } from '../deduceRootPitchId'
import { deduceRootPitchId } from '../deduceRootPitchId'
import { PozitionIds } from '../../Pozition'
import { PitchIds } from '../../Pitch'

type Covariates = {
  readonly harpKeyId: PitchIds;
  readonly rootPitchId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export const getCovariates = (controlVariables: DeduceRootPitchProps): Covariates => {
  const { harpKeyId, pozitionId } = controlVariables
  const rootPitchId = deduceRootPitchId(controlVariables)

  return { harpKeyId, pozitionId, rootPitchId }
}

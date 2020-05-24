import type { PozitionIds } from '../../Pozition'
import type { PitchIds } from '../../Pitch'

export type HarpKeyControlVars = {
  readonly rootPitchId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export type RootPitchControlVars = {
  readonly harpKeyId: PitchIds;
  readonly pozitionId: PozitionIds;
}

export type PozitionControlVars = {
  readonly rootPitchId: PitchIds;
  readonly harpKeyId: PitchIds;
}

export type GenericControlVars = HarpKeyControlVars | RootPitchControlVars | PozitionControlVars

export type CovariateGroup = {
  readonly harpKeyId: PitchIds;
  readonly rootPitchId: PitchIds;
  readonly pozitionId: PozitionIds;
}

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
export const isHarpKeyControlVars = (props: GenericControlVars): props is HarpKeyControlVars => {
  const predicateOne = (props as HarpKeyControlVars).rootPitchId !== undefined
  const predicateTwo = (props as HarpKeyControlVars).pozitionId !== undefined

  return predicateOne && predicateTwo
}
export const isRootPitchControlVars = (props: GenericControlVars): props is RootPitchControlVars => {
  const predicateOne = (props as RootPitchControlVars).harpKeyId !== undefined
  const predicateTwo = (props as RootPitchControlVars).pozitionId !== undefined

  return predicateOne && predicateTwo
}
export const isPozitionControlVars = (props: GenericControlVars): props is PozitionControlVars => {
  const predicateOne = (props as PozitionControlVars).rootPitchId !== undefined
  const predicateTwo = (props as PozitionControlVars).harpKeyId !== undefined

  return predicateOne && predicateTwo
}

export type CovariateGroup = {
  readonly harpKeyId: PitchIds;
  readonly rootPitchId: PitchIds;
  readonly pozitionId: PozitionIds;
}

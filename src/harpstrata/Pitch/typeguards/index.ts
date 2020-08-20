import { PitchIds } from '../types'
import type { ContextualDisplayValues, NaturalDisplayValue } from '../types'

export const isPitchId = (idIn: string): idIn is PitchIds => {
  return Object.values(PitchIds).includes(idIn as PitchIds)
}

export const isNaturalDisplayValues = (displayValues: ContextualDisplayValues): displayValues is NaturalDisplayValue => {
  const { natural } = displayValues as NaturalDisplayValue
  return natural !== undefined
}

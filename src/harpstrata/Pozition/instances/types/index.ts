import type { PozitionIds } from '../../types'
import type { HalfstepIndex } from '../../../Apparatus'

export type Pozition = {
  readonly id: PozitionIds;
  readonly rootOffset: HalfstepIndex;
}

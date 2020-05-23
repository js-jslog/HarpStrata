import { PozitionIds } from '../types'
import type { Pozition } from '../types'
import { FIRST, SECOND, THIRD, FOURTH, FIFTH, SIXTH, SEVENTH, EIGHTH, NINTH, TENTH, ELEVENTH, TWELFTH } from '../constants'

const pozitionMap = new Map()
pozitionMap.set(FIRST.id, FIRST)
pozitionMap.set(EIGHTH.id, EIGHTH)
pozitionMap.set(THIRD.id, THIRD)
pozitionMap.set(TENTH.id, TENTH)
pozitionMap.set(FIFTH.id, FIFTH)
pozitionMap.set(TWELFTH.id, TWELFTH)
pozitionMap.set(SEVENTH.id, SEVENTH)
pozitionMap.set(SECOND.id, SECOND)
pozitionMap.set(NINTH.id, NINTH)
pozitionMap.set(FOURTH.id, FOURTH)
pozitionMap.set(ELEVENTH.id, ELEVENTH)
pozitionMap.set(SIXTH.id, SIXTH)

export const getOrderedPozitionIds = (zeroth: PozitionIds = PozitionIds.First): PozitionIds[] => {
  const orderedPozitionIds = Array.from(pozitionMap.keys())

  const desiredZeroIndex = orderedPozitionIds.indexOf(zeroth)

  const head = [ ...orderedPozitionIds.slice(desiredZeroIndex) ]
  const tail = [ ...orderedPozitionIds.slice(0, (desiredZeroIndex)) ]

  return [ ...head, ...tail ]
}

export const getPozitionRootOffset = (pozitionId: PozitionIds): number => getOrderedPozitionIds().indexOf(pozitionId)

export const getPozition = (pozitionId: PozitionIds): Pozition => pozitionMap.get(pozitionId)

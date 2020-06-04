import { PozitionIds } from '../types'
import type { Pozition } from '../types'
import { instanceMap } from '../instances'
import type { HalfstepIndex } from '../../Apparatus'


export const getPozition = (pozitionId: PozitionIds): Pozition => {
  const instance = instanceMap.get(pozitionId)
  
  if (instance !== undefined) return instance

  const errorMessage = `
    A Pozition instance has not been found as mapped
    from the input PozitionId: ${pozitionId}

    The Pozition instanceMap should contain a mapping
    for every PozitionId.
  `
  throw new Error(errorMessage)
}

export const getPozitionByOffset = (rootOffset: HalfstepIndex): Pozition => {
  const keyValues = Array.from(instanceMap)
  const reducer = (accumulator: PozitionIds | undefined, nextPair: [PozitionIds, Pozition]): PozitionIds | undefined => {
    const [ , instance ] = nextPair
    if (rootOffset === instance.rootOffset) return instance.id
    return accumulator
  }

  const pozitionId = keyValues.reduce(reducer, undefined)

  if (pozitionId !== undefined) return getPozition(pozitionId)

  const errorMessage = `
    A Pozition instance has not been found to contain
    the input rootOffset: ${rootOffset}

    The rootOffset is any number up to 11.
    If your number is over 11 then try performing mod 12 on it.
  `
  throw new Error(errorMessage)
}

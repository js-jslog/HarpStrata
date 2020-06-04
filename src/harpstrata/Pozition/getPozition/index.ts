import { PozitionIds } from '../types'
import type { Pozition } from '../types'
import { instanceMap } from '../instances'


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

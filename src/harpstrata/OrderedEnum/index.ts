import { reverseFromOrigin } from './reverseFromOrigin'

export const getOrderedEnum = <T>(enumerator: Record<string, T>, origin: T = Object.values(enumerator)[0]): ReadonlyArray<T> => {
  const ascendingValues = Object.values(enumerator)
  const originIndex = ascendingValues.indexOf(origin)

  const head = [ ...ascendingValues.slice(originIndex) ]
  const tail = [ ...ascendingValues.slice(0, (originIndex)) ]

  return [ ...head, ...tail ]
}

export const getDescendingEnum = <T>(enumerator: Record<string, T>, origin?: T): ReadonlyArray<T> => {
  return reverseFromOrigin(getOrderedEnum(enumerator, origin)) 
}

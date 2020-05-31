export const getOrderedEnum = <T>(enumerator: Record<string, T>): ReadonlyArray<T> => {
  return Object.values(enumerator)
}

export const reverseFromOrigin = (arrayIn: ReadonlyArray<number>): ReadonlyArray<number> => {
  const [ origin, ...arrayWithoutOrigin ] = arrayIn
  const reverseWithoutOrigin = [ ...arrayWithoutOrigin ].reverse()

  return [ origin, ...reverseWithoutOrigin ]
}

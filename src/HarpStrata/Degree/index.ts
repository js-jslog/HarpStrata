import { Degrees, DegreeMatrix } from './types'

const ORDERED_DEGREES: readonly Degrees[] = [
  Degrees.Root,
  Degrees.Flat2,
  Degrees.Second,
  Degrees.Flat3,
  Degrees.Third,
  Degrees.Fourth,
  Degrees.Flat5,
  Degrees.Fifth,
  Degrees.Flat6,
  Degrees.Sixth,
  Degrees.Flat7,
  Degrees.Seventh,
] as const

export const getDegreeMatrix = (halfstepMatrix, offset): DegreeMatrix => {
  const shiftedDegrees = [ ...ORDERED_DEGREES ]

  for (let i = 0; i < offset; i++) {
    shiftedDegrees.unshift(shiftedDegrees.pop())
  }

  return halfstepMatrix.map((row) => {
    return row.map((element) => {
      return shiftedDegrees[element % 12]
    })
  })
}

import { DegreeIds, DegreeMatrix } from './types'

// TODO: create Degree interface and objects rather
// than using enumerators here
const ORDERED_DEGREES: readonly DegreeIds[] = [
  DegreeIds.Root,
  DegreeIds.Flat2,
  DegreeIds.Second,
  DegreeIds.Flat3,
  DegreeIds.Third,
  DegreeIds.Fourth,
  DegreeIds.Flat5,
  DegreeIds.Fifth,
  DegreeIds.Flat6,
  DegreeIds.Sixth,
  DegreeIds.Flat7,
  DegreeIds.Seventh,
] as const

export const getDegreeMatrix = (halfstepMatrix, offset): DegreeMatrix => {
  const shiftedDegreeIds = [ ...ORDERED_DEGREES ]

  for (let i = 0; i < offset; i++) {
    shiftedDegreeIds.unshift(shiftedDegreeIds.pop())
  }

  return halfstepMatrix.map((row) => {
    return row.map((element) => {
      return shiftedDegreeIds[element % 12]
    })
  })
}

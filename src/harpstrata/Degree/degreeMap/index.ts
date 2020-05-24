import type { Degree } from '../types'
import { DegreeIds } from '../types'
import { ROOT, FLAT2, SECOND, FLAT3, THIRD, FOURTH, FLAT5, FIFTH, FLAT6, SIXTH, FLAT7, SEVENTH } from '../constants'

const degreeMap = new Map()
degreeMap.set(ROOT.id, ROOT)
degreeMap.set(FLAT2.id, FLAT2)
degreeMap.set(SECOND.id, SECOND)
degreeMap.set(FLAT3.id, FLAT3)
degreeMap.set(THIRD.id, THIRD)
degreeMap.set(FOURTH.id, FOURTH)
degreeMap.set(FLAT5.id, FLAT5)
degreeMap.set(FIFTH.id, FIFTH)
degreeMap.set(FLAT6.id, FLAT6)
degreeMap.set(SIXTH.id, SIXTH)
degreeMap.set(FLAT7.id, FLAT7)
degreeMap.set(SEVENTH.id, SEVENTH)

export const getAscendingDegreeIds = (zeroth: DegreeIds = DegreeIds.Root): ReadonlyArray<DegreeIds> => {
  const orderedDegreeIds = Array.from(degreeMap.keys())

  const desiredZeroIndex = orderedDegreeIds.indexOf(zeroth)

  const head = [ ...orderedDegreeIds.slice(desiredZeroIndex) ]
  const tail = [ ...orderedDegreeIds.slice(0, (desiredZeroIndex)) ]

  return [ ...head, ...tail ]
}

export const getDescendingDegreeIds = (origin: DegreeIds = DegreeIds.Root): ReadonlyArray<DegreeIds> => {
  const ascendingDegreeIds = getAscendingDegreeIds(origin)
  const [ , ...ascendingWithoutOrigin ] = ascendingDegreeIds
  const descendingWithoutOrigin = [ ...ascendingWithoutOrigin ].reverse()

  return [ origin, ...descendingWithoutOrigin ]
}

export const getDegree = (degreeId: DegreeIds): Degree => degreeMap.get(degreeId)

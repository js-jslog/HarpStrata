import { PozitionIds } from '../types'
import type { Pozition } from '../types'

import { getOrderedPozitionIds, getPozition } from './index'

const { First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth, Ninth, Tenth, Eleventh, Twelfth } = PozitionIds

test('getOrderedPozitionIds function returns an ordered array of the pozitions defaulting to starting at First', () => {
  const expectedArray = [
    First, Eighth, Third, Tenth, Fifth, Twelfth, Seventh, Second, Ninth, Fourth, Eleventh, Sixth
  ]
  const actualArray = getOrderedPozitionIds()

  expect(actualArray).toEqual(expectedArray)
})

test('getOrderedPozitionIds function returns an ordered array of the pozitions from a given starting point', () => {
  const expectedArray = [
    Seventh, Second, Ninth, Fourth, Eleventh, Sixth, First, Eighth, Third, Tenth, Fifth, Twelfth
  ]
  const actualArray = getOrderedPozitionIds(Seventh)

  expect(actualArray).toEqual(expectedArray)
})

test('getPozition function can return a first pozition', () => {
  const FIRST_POZITION: Pozition = {
    id: PozitionIds.First,
    root: 0,
  } as const
  const actualPozition = getPozition(FIRST_POZITION.id)

  expect(actualPozition).toStrictEqual(FIRST_POZITION)
})

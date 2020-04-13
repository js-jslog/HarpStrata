import { PozitionIds, Pozition } from './types'
import { getActivePozitionIds, getPozition } from './index'

test('getActivePozitionIds function returns an array of the available positions', () => {
  const expectedArray = [ PozitionIds.First, PozitionIds.Second ]
  const actualArray = getActivePozitionIds()

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getPozition function can return a first position', () => {
  const FIRST_POSITION: Pozition = {
    id: PozitionIds.First,
    root: 0,
  } as const
  const actualPozition = getPozition(FIRST_POSITION.id)

  expect(actualPozition).toStrictEqual(FIRST_POSITION)
})

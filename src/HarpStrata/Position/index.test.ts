import { EXAMPLE_POSITIONS } from './testResources'

import { PositionIds } from './types'
import { getActivePositionIds, getPosition } from './index'

test('getActivePositionIds function returns an array of the available positions', () => {
  const expectedArray = [ PositionIds.First, PositionIds.Second ]
  const actualArray = getActivePositionIds()

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getPosition function can return a first position', () => {
  const { FIRST_POSITION } = EXAMPLE_POSITIONS
  const actualPosition = getPosition(FIRST_POSITION.id)

  expect(actualPosition).toStrictEqual(FIRST_POSITION)
})

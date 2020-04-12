import { PositionIds, Position } from './types'
import { getActivePositionIds, getPosition } from './index'

test('getActivePositionIds function returns an array of the available positions', () => {
  const expectedArray = [ PositionIds.First, PositionIds.Second ]
  const actualArray = getActivePositionIds()

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getPosition function can return a first position', () => {
  const FIRST_POSITION: Position = {
    id: PositionIds.First,
    root: 0,
  } as const
  const actualPosition = getPosition(FIRST_POSITION.id)

  expect(actualPosition).toStrictEqual(FIRST_POSITION)
})

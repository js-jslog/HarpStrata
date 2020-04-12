import { PositionIds, Position } from './types'

export const FIRST: Position = {
  id: PositionIds.First,
  root: 0,
} as const

export const SECOND: Position = {
  id: PositionIds.Second,
  root: 7,
} as const

const positionMap = new Map()
positionMap.set(FIRST.id, FIRST)
positionMap.set(SECOND.id, SECOND)

export const getActivePositionIds = (): PositionIds[] => Array.from(positionMap.keys())
export const getPosition = (positionId: PositionIds): Position => positionMap.get(positionId)

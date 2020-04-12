import { PositionIds, Position } from './types'

export const FIRST: {
  id: PositionIds.First;
  root: 0;
} = {
  id: PositionIds.First,
  root: 0,
}

export const SECOND: {
  id: PositionIds.Second;
  root: 7;
} = {
  id: PositionIds.Second,
  root: 7,
}

const positionMap = new Map()
positionMap.set(FIRST.id, FIRST)
positionMap.set(SECOND.id, SECOND)

export const getActivePositionIds = (): PositionIds[] => Array.from(positionMap.keys())
export const getPosition = (positionId: PositionIds): Position => positionMap.get(positionId)

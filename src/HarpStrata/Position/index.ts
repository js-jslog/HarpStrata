import { PositionIds, Position } from './types'
import { FIRST, SECOND } from './constants'

const positionMap = new Map()
positionMap.set(FIRST.id, FIRST)
positionMap.set(SECOND.id, SECOND)

export const getActivePositionIds = (): PositionIds[] => Array.from(positionMap.keys())
export const getPosition = (positionId: PositionIds): Position => positionMap.get(positionId)

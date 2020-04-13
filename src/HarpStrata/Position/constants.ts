import { PositionIds, Position } from './types'

export const FIRST: Position = {
  id: PositionIds.First,
  root: 0,
} as const

export const SECOND: Position = {
  id: PositionIds.Second,
  root: 7,
} as const


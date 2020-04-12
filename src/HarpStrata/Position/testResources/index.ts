import { PositionIds, Position } from '../types'

// TODO: consider removing these given that
// we define the same as index exports

const FIRST_POSITION: Position = {
  id: PositionIds.First,
  root: 0,
} as const

export const EXAMPLE_POSITIONS = {
  FIRST_POSITION,
} as const

import { DegreeIds, DegreeMatrix } from '../types'

const MAJOR_DIATONIC_FIRST_POSITION: DegreeMatrix = [
  [ DegreeIds.Flat3 , undefined       , undefined        , DegreeIds.Flat3 , ],
  [ DegreeIds.Root  , DegreeIds.Third , DegreeIds.Fifth  , DegreeIds.Root  , ],
  [ DegreeIds.Second, DegreeIds.Fifth , DegreeIds.Seventh, DegreeIds.Second, ],
  [ DegreeIds.Flat2 , DegreeIds.Flat5 , DegreeIds.Flat7  , DegreeIds.Flat2 , ],
  [ undefined       , DegreeIds.Fourth, DegreeIds.Sixth  , undefined       , ],
  [ undefined       , undefined       , DegreeIds.Flat6  , undefined       , ],
] as const

const MAJOR_DIATONIC_SECOND_POSITION: DegreeMatrix = [
  [ DegreeIds.Flat6 , undefined        , undefined       , DegreeIds.Flat6 , ],
  [ DegreeIds.Fourth, DegreeIds.Sixth  , DegreeIds.Root  , DegreeIds.Fourth, ],
  [ DegreeIds.Fifth , DegreeIds.Root   , DegreeIds.Third , DegreeIds.Fifth , ],
  [ DegreeIds.Flat5 , DegreeIds.Seventh, DegreeIds.Flat3 , DegreeIds.Flat5 , ],
  [ undefined       , DegreeIds.Flat7  , DegreeIds.Second, undefined       , ],
  [ undefined       , undefined        , DegreeIds.Flat2 , undefined       , ],
] as const

export const EXAMPLE_DEGREES = {
  MAJOR_DIATONIC_FIRST_POSITION,
  MAJOR_DIATONIC_SECOND_POSITION
} as const

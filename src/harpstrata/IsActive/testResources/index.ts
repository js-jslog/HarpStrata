import type { IsActiveMatrix } from '../types'
import { IsActiveIds } from '../types'
import { PitchIds } from '../../Pitch'
import { DegreeIds } from '../../Degree'

const { Active, Inactive } = IsActiveIds

const C_MAJOR_DIATONIC_FIRST_POZITION_MAJOR_PENTATONIC_MATRIX: IsActiveMatrix = [
  [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Inactive  ],
  [ Inactive , undefined, undefined, Inactive , Inactive , Inactive , undefined, Inactive , Inactive , Inactive  ],
  [ Active   , Active   , Active   , Active   , Active   , Active   , Active   , Active   , Active   , Active    ],
  [ Active   , Active   , Inactive , Active   , Inactive , Active   , Inactive , Active   , Inactive , Active    ],
  [ Inactive , Inactive , Inactive , Inactive , undefined, Inactive , Inactive , undefined, Inactive , Inactive  ],
  [ undefined, Inactive , Active   , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [ undefined, undefined, Inactive , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
] as const

const MAJOR_PENTATONIC_SCALE_DEGREES: ReadonlyArray<DegreeIds> = [ DegreeIds.Root, DegreeIds.Second, DegreeIds.Third, DegreeIds.Fifth, DegreeIds.Sixth ] as const
const MAJOR_PENTATONIC_PITCHES_C_KEY: ReadonlyArray<PitchIds> = [ PitchIds.A, PitchIds.C, PitchIds.D, PitchIds.E, PitchIds.G ] as const

const C_MAJOR_DIATONIC_FIRST_POZITION_MAJOR_PENTATONIC = {
  isActiveMatrix: C_MAJOR_DIATONIC_FIRST_POZITION_MAJOR_PENTATONIC_MATRIX,
  activeDegreeIds: MAJOR_PENTATONIC_SCALE_DEGREES,
  activePitchIds: MAJOR_PENTATONIC_PITCHES_C_KEY,
} as const

export const EXAMPLE_IS_ACTIVE_COMPLEXES = {
  C_MAJOR_DIATONIC_FIRST_POZITION_MAJOR_PENTATONIC,
} as const

import { PitchIds } from '../types'
import type { PitchMatrix } from '../types'
import { getPitch } from '../Pitch'

const C = getPitch(PitchIds.C)
const Db = getPitch(PitchIds.Db)
const D = getPitch(PitchIds.D)
const Eb = getPitch(PitchIds.Eb)
const E = getPitch(PitchIds.E)
const F = getPitch(PitchIds.F)
const Gb = getPitch(PitchIds.Gb)
const G = getPitch(PitchIds.G)
const Ab = getPitch(PitchIds.Ab)
const A = getPitch(PitchIds.A)
const Bb = getPitch(PitchIds.Bb)
const B = getPitch(PitchIds.B)

const MAJOR_DIATONIC_C_HARMONICA: PitchMatrix = [
  [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Bb        ],
  [ Eb       , undefined, undefined, Eb       , Gb       , Bb       , undefined, Eb       , Gb       , B         ],
  [ C        , E        , G        , C        , E        , G        , C        , E        , G        , C         ],
  [ D        , G        , B        , D        , F        , A        , B        , D        , F        , A         ],
  [ Db       , Gb       , Bb       , Db       , undefined, Ab       , Db       , undefined, Ab       , Db        ],
  [ undefined, F        , A        , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [ undefined, undefined, Ab       , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
] as const

const MAJOR_DIATONIC_F_HARMONICA: PitchMatrix = [
  [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, Eb        ],
  [ Ab       , undefined, undefined, Ab       , B        , Eb       , undefined, Ab       , B        , E         ],
  [ F        , A        , C        , F        , A        , C        , F        , A        , C        , F         ],
  [ G        , C        , E        , G        , Bb       , D        , E        , G        , Bb       , D         ],
  [ Gb       , B        , Eb       , Gb       , undefined, Db       , Gb       , undefined, Db       , Gb        ],
  [ undefined, Bb       , D        , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
  [ undefined, undefined, Db       , undefined, undefined, undefined, undefined, undefined, undefined, undefined ],
] as const

export const EXAMPLE_PITCH_MATRICES = {
  MAJOR_DIATONIC_C_HARMONICA,
  MAJOR_DIATONIC_F_HARMONICA,
} as const

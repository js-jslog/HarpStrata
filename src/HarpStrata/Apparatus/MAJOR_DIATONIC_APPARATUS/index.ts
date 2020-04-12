import { ApparatusIds, Apparatus, HalfstepMatrix } from '../types'
import { InteractionMatrix } from '../Interaction/types'
import {
  OVERBLOW1,
  BLOW,
  DRAW,
  BEND1,
  BEND2,
  BEND3,
} from '../Interaction'

const halfsteps: HalfstepMatrix = [
  [ 3        , undefined, undefined, 15       , ],
  [ 0        , 4        , 7        , 12       , ],
  [ 2        , 7        , 11       , 14       , ],
  [ 1        , 6        , 10       , 13       , ],
  [ undefined, 5        , 9        , undefined, ],
  [ undefined, undefined, 8        , undefined, ],
] as const

const interactions: InteractionMatrix = [
  [ OVERBLOW1, undefined, undefined, OVERBLOW1, ],
  [ BLOW     , BLOW     , BLOW     , BLOW     , ],
  [ DRAW     , DRAW     , DRAW     , DRAW     , ],
  [ BEND1    , BEND1    , BEND1    , BEND1    , ],
  [ undefined, BEND2    , BEND2    , undefined, ],
  [ undefined, undefined, BEND3    , undefined, ],
] as const

export const MAJOR_DIATONIC_APPARATUS: Apparatus = {
  id: ApparatusIds.MajorDiatonic,
  halfsteps,
  interactions,
} as const


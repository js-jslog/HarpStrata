import { PozitionIds } from '../types'
import type { Pozition } from '../types'

export const instanceMap = new Map<PozitionIds, Pozition>()

type First = {
  readonly id: PozitionIds.First;
  readonly rootOffset: 0;
}
type Eighth = {
  readonly id: PozitionIds.Eighth;
  readonly rootOffset: 1;
}
type Third = {
  readonly id: PozitionIds.Third;
  readonly rootOffset: 2;
}
type Tenth = {
  readonly id: PozitionIds.Tenth;
  readonly rootOffset: 3;
}
type Fifth = {
  readonly id: PozitionIds.Fifth;
  readonly rootOffset: 4;
}
type Twelfth = {
  readonly id: PozitionIds.Twelfth;
  readonly rootOffset: 5;
}
type Seventh = {
  readonly id: PozitionIds.Seventh;
  readonly rootOffset: 6;
}
type Second = {
  readonly id: PozitionIds.Second;
  readonly rootOffset: 7;
}
type Ninth = {
  readonly id: PozitionIds.Ninth;
  readonly rootOffset: 8;
}
type Fourth = {
  readonly id: PozitionIds.Fourth;
  readonly rootOffset: 9;
}
type Eleventh = {
  readonly id: PozitionIds.Eleventh;
  readonly rootOffset: 10;
}
type Sixth = {
  readonly id: PozitionIds.Sixth;
  readonly rootOffset: 11;
}


const FIRST: First = { id: PozitionIds.First,    rootOffset: 0 }
const EIGHTH: Eighth = { id: PozitionIds.Eighth,   rootOffset: 1 }
const THIRD: Third = { id: PozitionIds.Third,    rootOffset: 2 }
const TENTH: Tenth = { id: PozitionIds.Tenth,    rootOffset: 3 }
const FIFTH: Fifth    = { id: PozitionIds.Fifth,    rootOffset: 4 }
const TWELFTH: Twelfth  = { id: PozitionIds.Twelfth,  rootOffset: 5 }
const SEVENTH: Seventh = { id: PozitionIds.Seventh,  rootOffset: 6 }
const SECOND: Second = { id: PozitionIds.Second,   rootOffset: 7 }
const NINTH: Ninth = { id: PozitionIds.Ninth,    rootOffset: 8 }
const FOURTH: Fourth = { id: PozitionIds.Fourth,   rootOffset: 9 }
const ELEVENTH: Eleventh = { id: PozitionIds.Eleventh, rootOffset: 10 }
const SIXTH: Sixth = { id: PozitionIds.Sixth,    rootOffset: 11 }


instanceMap.set(PozitionIds.First,    FIRST)
instanceMap.set(PozitionIds.Second,   SECOND)
instanceMap.set(PozitionIds.Third,    THIRD)
instanceMap.set(PozitionIds.Fourth,   FOURTH)
instanceMap.set(PozitionIds.Fifth,    FIFTH)
instanceMap.set(PozitionIds.Sixth,    SIXTH)
instanceMap.set(PozitionIds.Seventh,  SEVENTH)
instanceMap.set(PozitionIds.Eighth,   EIGHTH)
instanceMap.set(PozitionIds.Ninth,    NINTH)
instanceMap.set(PozitionIds.Tenth,    TENTH)
instanceMap.set(PozitionIds.Eleventh, ELEVENTH)
instanceMap.set(PozitionIds.Twelfth,  TWELFTH)

export const POZITION_INSTANCES = {
  [PozitionIds.First]: FIRST,
  [PozitionIds.Second]: SECOND,
  [PozitionIds.Third]: THIRD,
  [PozitionIds.Fourth]: FOURTH,
  [PozitionIds.Fifth]: FIFTH,
  [PozitionIds.Sixth]: SIXTH,
  [PozitionIds.Seventh]: SEVENTH,
  [PozitionIds.Eighth]: EIGHTH,
  [PozitionIds.Ninth]: NINTH,
  [PozitionIds.Tenth]: TENTH,
  [PozitionIds.Eleventh]: ELEVENTH,
  [PozitionIds.Twelfth]: TWELFTH,
} as const

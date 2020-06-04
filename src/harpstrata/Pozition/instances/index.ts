import { PozitionIds } from '../types'

import { Pozition } from './types'

export const instanceMap = new Map<PozitionIds, Pozition>()

const FIRST:    Pozition = { id: PozitionIds.First,    rootOffset: 0 }
const EIGHTH:   Pozition = { id: PozitionIds.Eighth,   rootOffset: 1 }
const THIRD:    Pozition = { id: PozitionIds.Third,    rootOffset: 2 }
const TENTH:    Pozition = { id: PozitionIds.Tenth,    rootOffset: 3 }
const FIFTH:    Pozition = { id: PozitionIds.Fifth,    rootOffset: 4 }
const TWELFTH:  Pozition = { id: PozitionIds.Twelfth,  rootOffset: 5 }
const SEVENTH:  Pozition = { id: PozitionIds.Seventh,  rootOffset: 6 }
const SECOND:   Pozition = { id: PozitionIds.Second,   rootOffset: 7 }
const NINTH:    Pozition = { id: PozitionIds.Ninth,    rootOffset: 8 }
const FOURTH:   Pozition = { id: PozitionIds.Fourth,   rootOffset: 9 }
const ELEVENTH: Pozition = { id: PozitionIds.Eleventh, rootOffset: 10 }
const SIXTH:    Pozition = { id: PozitionIds.Sixth,    rootOffset: 10 }

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

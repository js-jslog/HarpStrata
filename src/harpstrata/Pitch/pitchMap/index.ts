import type { Pitch } from '../types'
import { PitchIds } from '../types'
import { C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B } from '../constants'

const pitchMap = new Map()
pitchMap.set(C.id, C)
pitchMap.set(Db.id, Db)
pitchMap.set(D.id, D)
pitchMap.set(Eb.id, Eb)
pitchMap.set(E.id, E)
pitchMap.set(F.id, F)
pitchMap.set(Gb.id, Gb)
pitchMap.set(G.id, G)
pitchMap.set(Ab.id, Ab)
pitchMap.set(A.id, A)
pitchMap.set(Bb.id, Bb)
pitchMap.set(B.id, B)

export const getOrderedPitchIds = (zeroth: PitchIds = PitchIds.C): PitchIds[] => {
  const orderedPitchIds = Array.from(pitchMap.keys())

  const desiredZeroIndex = orderedPitchIds.indexOf(zeroth)

  const head = [ ...orderedPitchIds.slice(desiredZeroIndex) ]
  const tail = [ ...orderedPitchIds.slice(0, (desiredZeroIndex)) ]

  return [ ...head, ...tail ]
}

export const getPitch = (pitchId: PitchIds): Pitch => pitchMap.get(pitchId)

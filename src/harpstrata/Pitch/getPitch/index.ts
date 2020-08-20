import { PitchIds, NoteFoundations } from '../types'
import type { Pitch, ContextualDisplayValues } from '../types'

const pitchMap: Record<PitchIds, ContextualDisplayValues> = {
  [PitchIds.A]: {
    natural: NoteFoundations.A
  },
  [PitchIds.Bb]: {
    sharp: NoteFoundations.A,
    flat: NoteFoundations.B,
  },
  [PitchIds.B]: {
    natural: NoteFoundations.B
  },
  [PitchIds.C]: {
    natural: NoteFoundations.C
  },
  [PitchIds.Db]: {
    sharp: NoteFoundations.C,
    flat: NoteFoundations.D,
  },
  [PitchIds.D]: {
    natural: NoteFoundations.D
  },
  [PitchIds.Eb]: {
    sharp: NoteFoundations.D,
    flat: NoteFoundations.E,
  },
  [PitchIds.E]: {
    natural: NoteFoundations.E
  },
  [PitchIds.F]: {
    natural: NoteFoundations.F
  },
  [PitchIds.Gb]: {
    sharp: NoteFoundations.F,
    flat: NoteFoundations.G,
  },
  [PitchIds.G]: {
    natural: NoteFoundations.G
  },
  [PitchIds.Ab]: {
    sharp: NoteFoundations.G,
    flat: NoteFoundations.A,
  },
}

export const getPitch = (pitchId: PitchIds): Pitch => ({id: pitchId, contextualDisplayValues: pitchMap[pitchId]})

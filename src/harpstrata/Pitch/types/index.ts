export enum PitchIds {
  A = 'A',
  Bb = 'Bb',
  B = 'B',
  C = 'C',
  Db = 'Db',
  D = 'D',
  Eb = 'Eb',
  E = 'E',
  F = 'F',
  Gb = 'Gb',
  G = 'G',
  Ab = 'Ab',
}

export enum NoteFoundations {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
}

export type NaturalDisplayValue = {
  readonly natural: NoteFoundations;
}
export type UnnaturalDisplayValue = {
  readonly sharp: NoteFoundations;
  readonly flat: NoteFoundations;
}
export type ContextualDisplayValues = NaturalDisplayValue | UnnaturalDisplayValue

export type Pitch = {
  readonly id: PitchIds;
  readonly contextualDisplayValues: ContextualDisplayValues;
}

export type PitchRow = ReadonlyArray<Pitch | undefined>
export type PitchMatrix = ReadonlyArray<PitchRow>

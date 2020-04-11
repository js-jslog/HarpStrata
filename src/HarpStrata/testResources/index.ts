import { MajorDiatonicLayout } from '../HarpLayout/MajorDiatonicLayout'
import { EXAMPLE_DEGREES } from '../Degree/testResources'
import { HarpStrata } from '../types'

const MAJOR_DIATONIC_FIRST_POSITION: HarpStrata = {
  layout: MajorDiatonicLayout,
  degrees: EXAMPLE_DEGREES.MAJOR_DIATONIC_FIRST_POSITION,
}

const MAJOR_DIATONIC_SECOND_POSITION: HarpStrata = {
  layout: MajorDiatonicLayout,
  degrees: EXAMPLE_DEGREES.MAJOR_DIATONIC_SECOND_POSITION,
}

export const EXAMPLE_STRATA: {
  MAJOR_DIATONIC_FIRST_POSITION;
  MAJOR_DIATONIC_SECOND_POSITION;
} = {
  MAJOR_DIATONIC_FIRST_POSITION,
  MAJOR_DIATONIC_SECOND_POSITION,
}

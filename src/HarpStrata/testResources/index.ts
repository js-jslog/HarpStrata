import { HarpStrata } from '../types'
import { EXAMPLE_DEGREE_MATRICES } from '../Degree/testResources'
import { MAJOR_DIATONIC_APPARATUS } from '../Apparatus/constants'

const MAJOR_DIATONIC_FIRST_POSITION: HarpStrata = {
  apparatus: MAJOR_DIATONIC_APPARATUS,
  degrees: EXAMPLE_DEGREE_MATRICES.MAJOR_DIATONIC_FIRST_POSITION,
} as const

const MAJOR_DIATONIC_SECOND_POSITION: HarpStrata = {
  apparatus: MAJOR_DIATONIC_APPARATUS,
  degrees: EXAMPLE_DEGREE_MATRICES.MAJOR_DIATONIC_SECOND_POSITION,
} as const

export const EXAMPLE_STRATA: {
  MAJOR_DIATONIC_FIRST_POSITION;
  MAJOR_DIATONIC_SECOND_POSITION;
} = {
  MAJOR_DIATONIC_FIRST_POSITION,
  MAJOR_DIATONIC_SECOND_POSITION,
} as const

import { HarpLayout } from '../HarpLayout/types'
import { example_majorDiatonicLayout } from '../HarpLayout/testResources'
import { DegreeMatrix } from '../getDegreeMatrix/types'
import {
  example_majorDiatonicDegrees_firstPosition,
  example_majorDiatonicDegrees_secondPosition,
} from '../getDegreeMatrix/testResources'

interface HarpLaminae {
  layout: HarpLayout,
  degrees: DegreeMatrix,
};

export const example_majorDiatonicHarp_firstPosition: HarpLaminae = {
  layout: example_majorDiatonicLayout,
  degrees: example_majorDiatonicDegrees_firstPosition,
};

export const example_majorDiatonicHarp_secondPosition: HarpLaminae = {
  layout: example_majorDiatonicLayout,
  degrees: example_majorDiatonicDegrees_secondPosition,
};


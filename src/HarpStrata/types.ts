import { DegreeMatrix } from './Degree/types'
import { Apparatus } from './Apparatus/types'

export interface HarpStrata {
  apparatus: Apparatus;
  degrees: DegreeMatrix;
}


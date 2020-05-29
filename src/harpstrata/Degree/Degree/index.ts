import type { Degree } from '../types'
import { DegreeIds } from '../types'

export const getDegree = (degreeId: DegreeIds): Degree => ({ id: degreeId })

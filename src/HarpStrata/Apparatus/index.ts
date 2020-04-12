import { MajorDiatonicApparatus } from './MajorDiatonicApparatus'

import { ApparatusIds, Apparatus } from './types'

const apparatusMap = new Map()
apparatusMap.set(MajorDiatonicApparatus.id, MajorDiatonicApparatus)

export const getActiveApparatusIds = (): ApparatusIds[] => Array.from(apparatusMap.keys())
export const getApparatus = (apparatusId: ApparatusIds): Apparatus => apparatusMap.get(apparatusId)

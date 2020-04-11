import { ApparatusIds, Apparatus } from './types'
import { MajorDiatonicApparatus } from './MajorDiatonicApparatus'

const apparatusMap = new Map()
apparatusMap.set(MajorDiatonicApparatus.id, MajorDiatonicApparatus)

export const getActiveApparatusIds = (): ApparatusIds[] => Array.from(apparatusMap.keys())
export const getApparatus = (apparatusId: ApparatusIds): Apparatus => apparatusMap.get(apparatusId)

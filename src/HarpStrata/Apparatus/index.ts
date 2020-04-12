import { MAJOR_DIATONIC_APPARATUS } from './MAJOR_DIATONIC_APPARATUS'

import { ApparatusIds, Apparatus } from './types'


const apparatusMap = new Map()
apparatusMap.set(MAJOR_DIATONIC_APPARATUS.id, MAJOR_DIATONIC_APPARATUS)

export const getActiveApparatusIds = (): ApparatusIds[] => Array.from(apparatusMap.keys())
export const getApparatus = (apparatusId: ApparatusIds): Apparatus => apparatusMap.get(apparatusId)

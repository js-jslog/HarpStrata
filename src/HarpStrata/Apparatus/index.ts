import { ApparatusIds, Apparatus } from './types'
import { MajorDiatonicLayout } from './MajorDiatonicLayout'

const layoutMap = new Map()
layoutMap.set(MajorDiatonicLayout.id, MajorDiatonicLayout)

export const getApparatusIds = (): ApparatusIds[] => Array.from(layoutMap.keys())
export const getApparatus = (layout: ApparatusIds): Apparatus => layoutMap.get(layout)

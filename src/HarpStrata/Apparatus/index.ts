import { LayoutIds, Apparatus } from './types'
import { MajorDiatonicLayout } from './MajorDiatonicLayout'

const layoutMap = new Map()
layoutMap.set(MajorDiatonicLayout.id, MajorDiatonicLayout)

export const getHarpLayouts = (): LayoutIds[] => Array.from(layoutMap.keys())
export const getHarpLayout = (layout: LayoutIds): Apparatus => layoutMap.get(layout)

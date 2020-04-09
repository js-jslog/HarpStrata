import { LayoutIds, HarpLayout } from './types';
import { MajorDiatonicLayout } from './MajorDiatonicLayout';

const layoutMap = new Map();
layoutMap.set(MajorDiatonicLayout.id, MajorDiatonicLayout);

export const getHarpLayouts = (): LayoutIds[] => Array.from(layoutMap.keys());
export const getHarpLayout = (layout: LayoutIds): HarpLayout => layoutMap.get(layout);

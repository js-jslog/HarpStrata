import { Layouts, HarpLayout } from './types';
import { MajorDiatonicLayout } from './MajorDiatonicLayout';

const layoutMap = new Map();
layoutMap.set(MajorDiatonicLayout.id, MajorDiatonicLayout);

export const getHarpLayouts = (): Layouts[] => Array.from(layoutMap.keys());
export const getHarpLayout = (layout: Layouts): HarpLayout => layoutMap.get(layout);

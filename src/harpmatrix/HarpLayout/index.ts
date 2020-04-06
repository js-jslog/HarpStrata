import { Layouts, HarpLayout } from './types';
import MajorDiatonicLayout from './MajorDiatonicLayout';

export const getHarpLayouts = (): Layouts[] => [ Layouts.MajorDiatonic ];
export const getHarpLayout = (layout: Layouts): HarpLayout => MajorDiatonicLayout;

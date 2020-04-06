import { Layouts } from './types';
import MajorDiatonicLayout from './MajorDiatonicLayout';

export const getHarpLayouts = () => [ Layouts.MajorDiatonic ];
export const getHarpLayout = (layout: Layouts) => MajorDiatonicLayout;

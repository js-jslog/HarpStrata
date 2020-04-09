import { LayoutIds, HarpLayout, HalfstepMatrix } from '../types';
import { InteractionIds, InteractionMatrix } from '../Interaction/types';
import {
  overblow1,
  blow,
  draw,
  bend1,
  bend2,
  bend3,
} from '../Interaction';

const halfsteps: HalfstepMatrix = [
  [ 3,  ,   , 15, ],
  [ 0, 4, 7 , 12, ],
  [ 2, 7, 11, 14, ],
  [ 1, 6, 10, 13, ],
  [  , 5, 9 ,   , ],
  [  ,  , 8 ,   , ],
];

const interactions: InteractionMatrix = [
  [ overblow1,        ,        , overblow1, ],
  [ blow     , blow   , blow   , blow     , ],
  [ draw     , draw   , draw   , draw     , ],
  [ bend1    , bend1  , bend1  , bend1    , ],
  [          , bend2  , bend2  ,          , ],
  [          ,        , bend3  ,          , ],
];

export const MajorDiatonicLayout: HarpLayout = {
  id: LayoutIds.MajorDiatonic,
  halfsteps,
  interactions,
};


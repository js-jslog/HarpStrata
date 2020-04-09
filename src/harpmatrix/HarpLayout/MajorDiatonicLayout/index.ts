import { LayoutIds, HarpLayout, HalfstepMatrix } from '../types';
import { InteractionIds, InteractionMatrix } from '../Interaction/types';
import {
  OVERBLOW1,
  BLOW,
  DRAW,
  BEND1,
  BEND2,
  BEND3,
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
  [ OVERBLOW1,        ,        , OVERBLOW1, ],
  [ BLOW     , BLOW   , BLOW   , BLOW     , ],
  [ DRAW     , DRAW   , DRAW   , DRAW     , ],
  [ BEND1    , BEND1  , BEND1  , BEND1    , ],
  [          , BEND2  , BEND2  ,          , ],
  [          ,        , BEND3  ,          , ],
];

export const MajorDiatonicLayout: HarpLayout = {
  id: LayoutIds.MajorDiatonic,
  halfsteps,
  interactions,
};


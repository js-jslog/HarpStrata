import { Layouts, HarpLayout, Interactions, InteractionMatrix, HalfstepMatrix } from '../types';

const Overblow1: Interactions = Interactions.Overblow1;
const Blow: Interactions = Interactions.Blow;
const Draw: Interactions = Interactions.Draw;
const Bend1: Interactions = Interactions.Bend1;
const Bend2: Interactions = Interactions.Bend2;
const Bend3: Interactions = Interactions.Bend3;

const halfstepmatrix: HalfstepMatrix = [
  [ 3,  ,   , 15, ],
  [ 0, 4, 7 , 12, ],
  [ 2, 7, 11, 14, ],
  [ 1, 6, 10, 13, ],
  [  , 5, 9 ,   , ],
  [  ,  , 8 ,   , ],
];

const interactionmatrix: InteractionMatrix = [
  [ Overblow1,        ,        , Overblow1, ],
  [ Blow     , Blow   , Blow   , Blow     , ],
  [ Draw     , Draw   , Draw   , Draw     , ],
  [ Bend1    , Bend1  , Bend1  , Bend1    , ],
  [          , Bend2  , Bend2  ,          , ],
  [          ,        , Bend3  ,          , ],
];

const MajorDiatonicLayout: HarpLayout = {
  id: Layouts.MajorDiatonic,
  halfstepmatrix,
  interactionmatrix,
};

export default MajorDiatonicLayout;


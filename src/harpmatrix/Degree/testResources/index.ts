import { Degrees } from '../types';

export const example_majorDiatonicDegrees_firstPosition: [
  [ Degrees.Flat3 , undefined     , undefined      , Degrees.Flat3 , ],
  [ Degrees.Root  , Degrees.Third , Degrees.Fifth  , Degrees.Root  , ],
  [ Degrees.Second, Degrees.Fifth , Degrees.Seventh, Degrees.Second, ],
  [ Degrees.Flat2 , Degrees.Flat5 , Degrees.Flat7  , Degrees.Flat2 , ],
  [ undefined     , Degrees.Fourth, Degrees.Sixth  , undefined     , ],
  [ undefined     , undefined     , Degrees.Flat6  , undefined     , ],
] = [
  [ Degrees.Flat3 ,               ,                , Degrees.Flat3 , ],
  [ Degrees.Root  , Degrees.Third , Degrees.Fifth  , Degrees.Root  , ],
  [ Degrees.Second, Degrees.Fifth , Degrees.Seventh, Degrees.Second, ],
  [ Degrees.Flat2 , Degrees.Flat5 , Degrees.Flat7  , Degrees.Flat2 , ],
  [               , Degrees.Fourth, Degrees.Sixth  ,               , ],
  [               ,               , Degrees.Flat6  ,               , ],
];

export const example_majorDiatonicDegrees_secondPosition: [
  [ Degrees.Flat6 , undefined      , undefined     , Degrees.Flat6 , ],
  [ Degrees.Fourth, Degrees.Sixth  , Degrees.Root  , Degrees.Fourth, ],
  [ Degrees.Fifth , Degrees.Root   , Degrees.Third , Degrees.Fifth , ],
  [ Degrees.Flat5 , Degrees.Seventh, Degrees.Flat3 , Degrees.Flat5 , ],
  [ undefined     , Degrees.Flat7  , Degrees.Second, undefined     , ],
  [ undefined     , undefined      , Degrees.Flat2 , undefined     , ],
] = [
  [ Degrees.Flat6 ,                ,               , Degrees.Flat6 , ],
  [ Degrees.Fourth, Degrees.Sixth  , Degrees.Root  , Degrees.Fourth, ],
  [ Degrees.Fifth , Degrees.Root   , Degrees.Third , Degrees.Fifth , ],
  [ Degrees.Flat5 , Degrees.Seventh, Degrees.Flat3 , Degrees.Flat5 , ],
  [               , Degrees.Flat7  , Degrees.Second,               , ],
  [               ,                , Degrees.Flat2 ,               , ],
];

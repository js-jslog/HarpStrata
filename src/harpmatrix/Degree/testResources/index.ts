import { Degrees } from '../types'

const MAJOR_DIATONIC_FIRST_POSITION: [
  [ Degrees.Flat3 , undefined     , undefined      , Degrees.Flat3 , ],
  [ Degrees.Root  , Degrees.Third , Degrees.Fifth  , Degrees.Root  , ],
  [ Degrees.Second, Degrees.Fifth , Degrees.Seventh, Degrees.Second, ],
  [ Degrees.Flat2 , Degrees.Flat5 , Degrees.Flat7  , Degrees.Flat2 , ],
  [ undefined     , Degrees.Fourth, Degrees.Sixth  , undefined     , ],
  [ undefined     , undefined     , Degrees.Flat6  , undefined     , ],
] = [
  [ Degrees.Flat3 , undefined     , undefined      , Degrees.Flat3 , ],
  [ Degrees.Root  , Degrees.Third , Degrees.Fifth  , Degrees.Root  , ],
  [ Degrees.Second, Degrees.Fifth , Degrees.Seventh, Degrees.Second, ],
  [ Degrees.Flat2 , Degrees.Flat5 , Degrees.Flat7  , Degrees.Flat2 , ],
  [ undefined     , Degrees.Fourth, Degrees.Sixth  , undefined     , ],
  [ undefined     , undefined     , Degrees.Flat6  , undefined     , ],
]

const MAJOR_DIATONIC_SECOND_POSITION: [
  [ Degrees.Flat6 , undefined      , undefined     , Degrees.Flat6 , ],
  [ Degrees.Fourth, Degrees.Sixth  , Degrees.Root  , Degrees.Fourth, ],
  [ Degrees.Fifth , Degrees.Root   , Degrees.Third , Degrees.Fifth , ],
  [ Degrees.Flat5 , Degrees.Seventh, Degrees.Flat3 , Degrees.Flat5 , ],
  [ undefined     , Degrees.Flat7  , Degrees.Second, undefined     , ],
  [ undefined     , undefined      , Degrees.Flat2 , undefined     , ],
] = [
  [ Degrees.Flat6 , undefined      , undefined     , Degrees.Flat6 , ],
  [ Degrees.Fourth, Degrees.Sixth  , Degrees.Root  , Degrees.Fourth, ],
  [ Degrees.Fifth , Degrees.Root   , Degrees.Third , Degrees.Fifth , ],
  [ Degrees.Flat5 , Degrees.Seventh, Degrees.Flat3 , Degrees.Flat5 , ],
  [ undefined     , Degrees.Flat7  , Degrees.Second, undefined     , ],
  [ undefined     , undefined      , Degrees.Flat2 , undefined     , ],
]

export const EXAMPLE_DEGREES: {
  MAJOR_DIATONIC_FIRST_POSITION;
  MAJOR_DIATONIC_SECOND_POSITION;
} = {
  MAJOR_DIATONIC_FIRST_POSITION,
  MAJOR_DIATONIC_SECOND_POSITION
}

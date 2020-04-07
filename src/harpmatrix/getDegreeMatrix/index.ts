import { Degrees } from './types';

const orderedDegrees: [
  Degrees.Root,
  Degrees.Second,
  Degrees.Flat3,
  Degrees.Third,
  Degrees.Fourth,
  Degrees.Flat5,
  Degrees.Fifth,
  Degrees.Flat6,
  Degrees.Sixth,
  Degrees.Flat7,
  Degrees.Seventh,
] = [
  Degrees.Root,
  Degrees.Second,
  Degrees.Flat3,
  Degrees.Third,
  Degrees.Fourth,
  Degrees.Flat5,
  Degrees.Fifth,
  Degrees.Flat6,
  Degrees.Sixth,
  Degrees.Flat7,
  Degrees.Seventh,
];

export default (halfstepMatrix, offset) => {
  return halfstepMatrix.map((row) => {
    return row.map((element) => {
      return (12 + element - offset) % 12 + 1;
    });
  });
};

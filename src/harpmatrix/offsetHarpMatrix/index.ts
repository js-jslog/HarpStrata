import { ScaleDegree, Harpmatrix } from '../../common/types'

const orderedScaleDegrees: [
  '1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7'
] = [
  '1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7'
];

export default (harpmatrix: Harpmatrix, offset: number) => {
  const shiftedScaleDegrees = [...orderedScaleDegrees];

  for (let i = 0; i < offset; i++) {
    shiftedScaleDegrees.unshift(shiftedScaleDegrees.pop());
  }

  return harpmatrix.map((matrixrow) => {
    return matrixrow.map((degree) => {
      const degreeIndex = orderedScaleDegrees.indexOf(degree as ScaleDegree);
      const outputDegree = shiftedScaleDegrees[degreeIndex];
      return outputDegree
    });
  });
};


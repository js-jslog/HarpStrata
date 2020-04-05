type ScaleDegree = '1' | 'b2' | '2' | 'b3' | '3' | '4' | 'b5' | '5' | 'b6' | '6' | 'b7' | '7'
interface Harpmatrix extends Array<ScaleDegree>{}

const orderedScaleDegrees: [
  '1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7'
] = [
  '1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7'
];

const majorDiatonicLayout: [
  'b3', undefined, undefined, 'b3',
  '1', '3', '5', '1',
  '2', '5', '7', '2',
  'b2', 'b5', 'b7', 'b2',
  undefined, '4', '6', undefined,
  undefined, undefined, 'b6', undefined,
] = [
  'b3',     ,     , 'b3',
  '1' , '3' , '5' , '1' ,
  '2' , '5' , '7' , '2' ,
  'b2', 'b5', 'b7', 'b2',
      , '4' , '6' ,     ,
      ,     , 'b6',     ,
];

const layoutMap: {
  'major-diatonic': Harpmatrix;
} = {
  'major-diatonic': majorDiatonicLayout,
};

const getLayouts = () => Object.keys(layoutMap);

const getHarpMatrix = () => layoutMap['major-diatonic'];

const offsetHarpMatrix = (harpmatrix: Harpmatrix, offset: number) => {
  const shiftedScaleDegrees = [...orderedScaleDegrees];

  for (let i = 0; i < offset; i++) {
    shiftedScaleDegrees.unshift(shiftedScaleDegrees.pop());
  }

  return harpmatrix.map((degree) => {
    const degreeIndex= orderedScaleDegrees.indexOf(degree as ScaleDegree);
    const outputDegree = shiftedScaleDegrees[degreeIndex];
    return outputDegree
  });
};

export { getLayouts, getHarpMatrix, offsetHarpMatrix };


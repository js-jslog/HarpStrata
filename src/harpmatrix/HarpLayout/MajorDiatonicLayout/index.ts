const pitchmatrix = [
  [ 3,  ,   , 15, ],
  [ 0, 4, 7 , 12, ],
  [ 2, 7, 11, 14, ],
  [ 1, 6, 10, 13, ],
  [  , 5, 9 ,   , ],
  [  ,  , 8 ,   , ],
];

const interactionmatrix = [
  [ 'oblow',        ,        , 'oblow', ],
  [ 'blow' , 'blow' , 'blow' , 'blow' , ],
  [ 'draw' , 'draw' , 'draw' , 'draw' , ],
  [ 'bend ', 'bend' , 'bend' , 'bend' , ],
  [        , '2bend', '2bend',        , ],
  [        ,        , '3bend',        , ],
];

export default {
  pitchmatrix,
  interactionmatrix,
};


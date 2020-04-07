export default (halfstepMatrix) => {
  return halfstepMatrix.map((row) => {
    return row.map((element) => {
      return element + 1;
    });
  });
};

export default (halfstepMatrix, offset) => {
  return halfstepMatrix.map((row) => {
    return row.map((element) => {
      return element + 1 - offset;
    });
  });
};

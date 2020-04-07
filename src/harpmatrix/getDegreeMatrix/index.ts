export default (halfstepMatrix, offset) => {
  return halfstepMatrix.map((row) => {
    return row.map((element) => {
      return (12 + element - offset) % 12 + 1;
    });
  });
};

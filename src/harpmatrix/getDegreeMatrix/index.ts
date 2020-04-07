export default (halfstepMatrix, offset) => {
  return halfstepMatrix.map((row) => {
    return row.map((element) => {
      return (element - offset) % 12 + 1;
    });
  });
};

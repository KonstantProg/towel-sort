
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let newArray = [];

  if (!matrix) {
    return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      newArray = newArray.concat(matrix[i]);
    } else {
      newArray = newArray.concat(matrix[i].reverse());
    }
  }
  return newArray;
}

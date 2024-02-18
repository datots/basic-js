const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const bannedPositions = new Set();

  let sum = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!bannedPositions.has(j)) {
        sum += matrix[i][j];
      }
      // If the current value is 0, mark the position below as banned
      if (matrix[i][j] === 0 && i < rows - 1) {
        bannedPositions.add(j);
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};

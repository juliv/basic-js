
/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixOut = []
  for (let i = 0; i < matrix.length; i++) {
    let line = []
    for (let j = 0; j < matrix[i].length; j++) {

      const i0 = (i - 1 < 0) ? 0 : (i - 1)
      const i1 = (i + 1 > matrix.length - 1) ? matrix.length - 1 : (i + 1)

      const j0 = (j - 1 < 0) ? 0 : (j - 1)
      const j1 = (j + 1 > matrix[i].length - 1) ? matrix[i].length - 1 : (j + 1)

      let mines = 0
      for (let i2 = i0; i2 <= i1; i2++) {
        for (let j2 = j0; j2 <= j1; j2++) {
          if (i2 === i && j2 === j) {
            continue
          }
          if (matrix[i2][j2]) {
            mines++
          }
        }
      }
      line.push(mines)
    }
    matrixOut.push(line)
  }
  return matrixOut
}

module.exports = {
  minesweeper
};

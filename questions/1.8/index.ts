/**
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
 * column are set to 0.
 */
export function zeroMatrix(input: number[][]) {
  let result: number[][] = [];

  let rowsToZero = {};
  let columnsToZero = {};

  input.forEach((inp) => result.push([]));

  for (let row = 0; row < input.length; row++) {
    for (let column = 0; column < input[row].length; column++) {
      if (input[row][column] === 0) {
        rowsToZero[row] = true;
        columnsToZero[column] = true;
      }
    }
  }

  for (let row = 0; row < input.length; row++) {
    for (let column = 0; column < input[row].length; column++) {
      if (rowsToZero[row] || columnsToZero[column]) {
        result[row][column] = 0;
      } else {
        result[row][column] = input[row][column];
      }
    }
  }

  return result;
}

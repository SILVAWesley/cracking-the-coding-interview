/**
 * Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 */
export function rotateMatrix(input: number[][]) {
  let result: number[][] = [];

  input.forEach((inp) => result.push([]));

  for (let row = 0; row < input.length; row++) {
    for (let column = 0; column < input[row].length; column++) {
      result[column][input.length - 1 - row] = input[row][column];
    }
  }

  return result;
}

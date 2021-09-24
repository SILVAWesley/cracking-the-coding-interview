/**
 * Given two strings, write a method to decide if one is a permutation of the
 * other.
 *
 */
export function urlify(input: string, size: number) {
  let temp = "";

  for (let i = 0; i < size; i++) {
    if (input[i] === " " || !input[i]) {
      temp = temp + "%20";
    } else {
      temp = temp + input[i];
    }
  }

  return temp;
}

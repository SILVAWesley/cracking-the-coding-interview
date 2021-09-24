/**
 * Implement an algorithm to determine if a string has all unique characters. What if you
 * cannot use additional data structures?
 */
export function allUnique(input: string) {
  const charMap = {};

  for (let char of input) {
    if (charMap[char]) {
      return false;
    }

    charMap[char] = true;
  }

  return true;
}

/**
 * Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words
 *
 */
export function checkPalindromePermutation(input: string) {
  const letterMap: { [key: string]: number } = {};

  // Map letters
  for (const l of input) {
    if (l !== " ") {
      if (!letterMap[l]) {
        letterMap[l] = 1;
      } else {
        letterMap[l]++;
      }
    }
  }

  //

  let oddCount = 0;

  for (const value of Object.values(letterMap)) {
    if (value % 2 !== 0) {
      oddCount += 1;

      if (oddCount > 1) {
        return false;
      }
    }
  }

  return { has: true, permutations: [] };
}

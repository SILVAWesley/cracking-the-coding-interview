/**
 * Given two strings, write a method to decide if one is a permutation of the
 * other.
 */
export function checkPermutation(string1: string, string2: string) {
  const letterCount = {};

  // O(n)
  for (let i = 0; i < string1.length; i++) {
    if (!letterCount[string1[i]]) {
      letterCount[string1[i]] = 0;
    }

    letterCount[string1[i]]++;

    if (!letterCount[string2[i]]) {
      letterCount[string2[i]] = 0;
    }

    letterCount[string2[i]]--;
  }

  // O(n)
  for (const key of Object.keys(letterCount)) {
    if (letterCount[key] != 0) {
      return false;
    }
  }

  return true;
}

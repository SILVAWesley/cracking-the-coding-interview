/**
 * There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 */
export function checkOneAway(input1: string, input2: string) {
  if (Math.abs(input1.length - input2.length) > 1) {
    return false;
  }

  const { greatestInput, smallestInput } =
    input1.length > input2.length
      ? { greatestInput: input1, smallestInput: input2 }
      : { greatestInput: input2, smallestInput: input1 };

  let neededEdits = 0;
  let offset = 0;

  for (let i = 0; i < greatestInput.length; i++) {
    if (smallestInput.length === greatestInput.length) {
      if (smallestInput[i] !== greatestInput[i]) {
        neededEdits++;
      }
    } else if (!smallestInput[i - neededEdits]) {
      neededEdits++;
    } else if (greatestInput[i] !== smallestInput[i - neededEdits]) {
      neededEdits++;
    }

    if (neededEdits > 1) {
      return false;
    }
  }

  return true;
}

export function checkOneAway2(str1: string, str2: string) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  if (str1.length === str2.length) {
    let foundDifferentLetter = false;

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        if (!foundDifferentLetter) {
          foundDifferentLetter = true;
        } else {
          return false;
        }
      }
    }
    return true;
  } else {
    const biggestStr = str1.length > str2.length ? str1 : str2;
    const smallestStr = str2.length > str1.length ? str2 : str1;

    let edits = 0;

    for (let i = 0; i < biggestStr.length; i++) {
      if (!smallestStr[i - edits]) {
        edits++;
      } else if (biggestStr[i] !== smallestStr[i - edits]) {
        edits++;
      }

      if (edits > 1) {
        return false;
      }
    }

    return true;
  }
}

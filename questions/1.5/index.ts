/**
 * There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 */
export function checkOneWay(input1: string, input2: string) {
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

/**
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
 *"compressed" string would not become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 */
export function compressString(input: string) {
  let result = "";

  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      counter++;
    } else if (input[i - 1] !== input[i]) {
      result += input[i - 1] + counter;
      counter = 1;
    } else {
      counter++;
    }

    if (i === input.length - 1) {
      result += input[i] + counter;
    }
  }

  if (result.length >= input.length) {
    return input;
  }

  return result;
}

export function compressString2(str: string) {
  let newStr = "";

  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const previous = str[i - 1];

    if (i === 0) {
      counter++;
    } else if (i === str.length - 1) {
      newStr += `${current}${counter + 1}`;
    } else if (current !== previous) {
      newStr += `${previous}${counter}`;
      counter = 1;
    } else {
      counter++;
    }
  }

  if (newStr.length >= str.length) {
    return str;
  } else {
    return newStr;
  }
}

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

import { StringBuilder } from "../../datastructures/stringbuilder";

/**
 * Using string builder
 */
export function urlify2(str: string) {
  const url = new StringBuilder();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      url.append("%20");
    } else {
      url.append(str[i]);
    }
  }

  return url.toString();
}

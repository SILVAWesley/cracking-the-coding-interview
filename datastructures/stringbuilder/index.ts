import { IStringBuilder } from "./IStringBuilder";

export class StringBuilder implements IStringBuilder {
  arr: string[] = [];

  constructor(initialStr?: string) {
    if (initialStr) {
      this.arr = [initialStr];
    }
  }

  append(str: string) {
    this.arr.push(str);
  }

  clear() {
    this.arr = [];
  }

  toString() {
    return this.arr.join("");
  }
}

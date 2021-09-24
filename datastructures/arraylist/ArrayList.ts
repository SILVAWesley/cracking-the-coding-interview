import { IArrayList } from "./IArrayList";

export class ArrayList<T> implements IArrayList<T> {
  private innerArray: T[];
  private currentIndex: number;

  constructor(initialSize: number) {
    this.innerArray = Array(initialSize);
    this.currentIndex = 0;
  }

  add(value: T) {
    if (this.currentIndex >= this.innerArray.length) {
      const tempArray = Array(this.innerArray.length * 2);

      for (let i = 0; i < this.innerArray.length; i++) {
        tempArray[i] = this.innerArray[i];
      }

      this.innerArray = tempArray;
    }

    this.innerArray[this.currentIndex] = value;
    this.currentIndex++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.currentIndex) {
      throw new Error("wrong index");
    }

    const temp = this.innerArray[index];

    for (let i = index; i < this.currentIndex; i++) {
      this.innerArray[i] = this.innerArray[i + 1];
    }

    this.innerArray[this.currentIndex] = null;
    this.currentIndex--;

    return temp;
  }

  get(index: number) {
    if (index >= this.currentIndex || index < 0) {
      throw new Error("wrong index");
    }

    return this.innerArray[index];
  }

  toString() {
    return JSON.stringify(this.innerArray);
  }
}

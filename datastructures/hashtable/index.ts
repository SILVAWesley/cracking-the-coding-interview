import { IHashtable } from "./IHashtable";

export class Hashtable<T> implements IHashtable<T> {
  private innerArray: any[][];

  constructor(initSize: number) {
    this.innerArray = new Array(initSize);
  }

  add(key: string, value: T) {
    const hash = this.hash(key);
    const element = this.innerArray[hash % this.innerArray.length];

    if (!element) {
      this.innerArray[hash % this.innerArray.length] = [];
    }

    this.innerArray[hash % this.innerArray.length].push({ key, value });

    return true;
  }

  remove(key: string) {
    const hash = this.hash(key);

    const element = this.innerArray[hash % this.innerArray.length];

    if (!element) {
      throw new Error("Chave não existe");
    }

    this.innerArray[hash % this.innerArray.length];

    for (let i = 0; i < element.length; i++) {
      if (element[i].key === key) {
        const x = element[i].value;
        this.innerArray[hash % this.innerArray.length][i] = null;

        return x;
      }
    }

    return -1;
  }

  get(key: string) {
    const hash = this.hash(key);

    const element = this.innerArray[hash % this.innerArray.length];

    if (!element) {
      throw new Error("Chave não existe");
    }

    for (let i = 0; i < element.length; i++) {
      if (element[i].key === key) {
        return element[i].value;
      }
    }

    throw new Error("Chave não existe");
  }

  hash(key: string) {
    let hash = 0,
      i,
      chr;
    if (key.length === 0) return hash;
    for (i = 0; i < key.length; i++) {
      chr = key.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }

    return hash;
  }

  toString() {
    return JSON.stringify(this.innerArray);
  }
}

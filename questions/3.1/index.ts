/**
 * Describe how you could use a single array to implement three stacks
 */
export class ThreeInOne<T> {
  stack: T[] = [];

  lastLen = { 0: -3, 1: -2, 2: -1 };

  pop(stack: number): T {
    if (this.lastLen[stack] < 0) {
      throw new Error("Stack is empty");
    }

    const content = this.stack[this.lastLen[stack]];
    this.stack[this.lastLen[stack]] = null;
    this.lastLen[stack] -= 3;

    return content;
  }

  push(item: T, stack: number): boolean {
    this.stack[this.lastLen[stack] + 3] = item;
    this.lastLen[stack] += 3;
    return true;
  }

  peek(stack: number): T {
    return this.stack[this.lastLen[stack]];
  }

  isEmpty(stack: number): boolean {
    return this.lastLen[stack] < 0;
  }

  toString(): string {
    return JSON.stringify(this.stack);
  }
}

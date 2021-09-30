import { IStack, StackNode } from "../../datastructures/stack";

/**
 * Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
 * threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be
 * composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack
 * (that is, pop () should return the same values as it would if there were just a single stack).
 * FOLLOW UP
 * Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack.
 */
export class StackOfPlates implements IStack<number> {
  stacks: number[][] = [];
  topIndex: number = -1;
  threshold: number;

  constructor(threshold: number) {
    this.threshold = threshold;
  }

  pop(): number {
    if (this.topIndex < 0) {
      throw new Error("Stack is empty");
    }

    const oldNumber =
      this.stacks[Math.floor(this.topIndex / this.threshold)][
        this.topIndex % this.threshold
      ];

    this.stacks[Math.floor(this.topIndex / this.threshold)][
      this.topIndex % this.threshold
    ] = null;

    this.topIndex--;

    return oldNumber;
  }

  push(item: number): boolean {
    this.topIndex++;
    if (!this.stacks[Math.floor(this.topIndex / this.threshold)]) {
      this.stacks[Math.floor(this.topIndex / this.threshold)] = [];
    }

    this.stacks[Math.floor(this.topIndex / this.threshold)][
      this.topIndex % this.threshold
    ] = item;

    return true;
  }

  peek(): number {
    if (this.topIndex < 0) {
      throw new Error("Stack is empty");
    }

    return this.stacks[Math.floor(this.topIndex / this.threshold)][
      this.topIndex % this.threshold
    ];
  }

  isEmpty(): boolean {
    return this.topIndex < 0;
  }

  toString(): string {
    return JSON.stringify(this.stacks);
  }
}

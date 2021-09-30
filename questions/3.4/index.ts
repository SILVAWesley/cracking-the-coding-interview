import { IQueue } from "../../datastructures/queue/IQueue";
import { Stack } from "../../datastructures/stack";

/**
 * Implement a MyQueue class which implements a queue using two stacks.
 */
export class MyQueue implements IQueue<number> {
  firstStack: Stack<number> = new Stack();
  secondStack: Stack<number> = new Stack();

  remove(): number {
    while (!this.firstStack.isEmpty()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const e = this.secondStack.pop();

    return e;
  }

  add(item: number): boolean {
    while (!this.secondStack.isEmpty()) {
      this.firstStack.push(this.secondStack.pop());
    }

    this.firstStack.push(item);

    return true;
  }

  peek(): number {
    while (!this.firstStack.isEmpty()) {
      this.secondStack.push(this.firstStack.pop());
    }

    return this.secondStack.peek();
  }

  isEmpty(): boolean {
    return this.firstStack.isEmpty() && this.secondStack.isEmpty();
  }

  toString(): string {
    return (
      "First stack: " +
      this.firstStack.toString() +
      " | Second Stack: " +
      this.secondStack.toString()
    );
  }
}

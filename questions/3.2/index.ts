import { IStack, StackNode } from "../../datastructures/stack";

/**
 * How would you design a stack which, in addition to push and pop, has a function min
 * which returns the minimum element? Push, pop and min should all operate in 0(1) time.
 */
export class StackMin implements IStack<number> {
  topNode: StackNode<number>;
  min: StackNode<number>;

  pop(): number {
    if (!this.topNode) {
      throw new Error("Empty stack");
    }

    const content = this.topNode.content;
    this.topNode = this.topNode.next;

    if (content === this.min.content) {
      this.min = this.min.next;
    }

    return content;
  }

  push(item: number): boolean {
    const newNode = new StackNode(item, this.topNode);
    this.topNode = newNode;

    if (!this.min || newNode.content <= this.min.content) {
      if (!this.min) {
        this.min = new StackNode<number>(item, null);
      } else {
        const newMin = new StackNode<number>(item, this.min);
        this.min = newMin;
      }
    }
    return true;
  }

  peek(): number {
    return this.topNode.content;
  }

  getMin(): number {
    return this.min.content;
  }

  isEmpty(): boolean {
    return this.topNode === null;
  }

  toString(): string {
    let currentNode = this.topNode;
    let result = "[";
    while (currentNode?.next) {
      result += currentNode.content + ", ";
      currentNode = currentNode.next;
    }

    if (currentNode) {
      result += currentNode.content;
    }

    result += "]";
    return result;
  }
}

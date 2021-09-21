import { IStack } from "./IStack";
import { StackNode } from "./StackNode";

export class Stack<T> implements IStack<T> {
  topNode: StackNode<T>;

  pop(): T {
    if (!this.topNode) {
      throw new Error("Empty stack");
    }

    const content = this.topNode.content;
    this.topNode = this.topNode.next;
    return content;
  }

  push(item: T): boolean {
    const newNode = new StackNode(item, this.topNode);
    this.topNode = newNode;
    return true;
  }

  peek(): T {
    return this.topNode.content;
  }

  isEmpty(): boolean {
    return this.topNode ? false : true;
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

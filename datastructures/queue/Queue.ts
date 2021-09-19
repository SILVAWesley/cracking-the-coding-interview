import { IQueue } from "./IQueue";
import { QueueNode } from "./QueueNode";

export class Queue<T> implements IQueue<T> {
  firstNode: QueueNode<T>;
  lastNode: QueueNode<T>;

  remove(): T {
    if (!this.firstNode) throw new Error("Queue is empty");

    const content = this.firstNode.content;
    this.firstNode = this.firstNode.next;

    if (!this.firstNode) {
      this.lastNode = null;
    }

    return content;
  }

  add(item: T): boolean {
    const newNode = new QueueNode<T>(item, null);

    if (this.lastNode) {
      this.lastNode.next = newNode;
    }

    this.lastNode = newNode;

    if (!this.firstNode) {
      this.firstNode = this.lastNode;
    }

    return true;
  }

  peek(): T {
    if (!this.firstNode) throw new Error("Queue is empty");
    return this.firstNode.content;
  }

  isEmpty(): boolean {
    return this.firstNode ? false : true;
  }

  toString(): string {
    let currentNode = this.firstNode;
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

import { LinkedNode } from ".";

export class LinkedList<T> {
  public root: LinkedNode<T>;

  constructor() {}

  add(content: T) {
    let currentNode = this.root;

    if (!currentNode) {
      this.root = new LinkedNode<T>(null, null, content);
      return;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new LinkedNode<T>(null, currentNode, content);
  }

  remove(content: T) {
    let currentNode = this.root;

    if (!currentNode) {
      return false;
    }

    if (currentNode.content === content) {
      this.root = this.root.next;
      if (this.root) {
        this.root.previous = null;
      }
      return true;
    }

    while (currentNode.next) {
      if (currentNode.content === content) {
        currentNode.previous.next = currentNode.next;
        currentNode.next.previous = currentNode.previous;
        return true;
      }

      currentNode = currentNode.next;
    }

    if (currentNode.content === content) {
      currentNode.previous.next = null;
      return true;
    }

    return false;
  }

  toString() {
    let result = "[";
    let currentNode = this.root;

    while (currentNode?.next) {
      result += `${currentNode.content}, `;
      currentNode = currentNode.next;
    }

    result += currentNode?.content;

    result += "]";

    return result;
  }
}

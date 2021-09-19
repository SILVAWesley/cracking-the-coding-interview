import { LinkedList, LinkedNode } from "../../datastructures/linkedlist";

/**
 * Given a circular linked list, implement an algorithm that returns the node at the
 * beginning of the loop.
 */
export function checkLoopDetection(list: LinkedList<string>) {
  const nodemap = {};

  let currentNode = list.root;

  while (currentNode) {
    if (nodemap[currentNode.content]) {
      return currentNode;
    } else {
      nodemap[currentNode.content] = true;
    }

    currentNode = currentNode.next;
  }

  return false;
}

import { LinkedList, LinkedNode } from "../../datastructures/linkedlist";

/**
 *  Implement an algorithm to find the kth to last element of a singly linked list.
 */
export function returnKthToLast(list: LinkedList<string>, kth: number) {
  const root = list.root;

  let currentNode = root;
  let currentIndex = 0;
  const result = [];

  if (!currentNode) {
    return result;
  }

  while (currentNode) {
    if (currentIndex >= kth) {
      result.push(currentNode.content);
    }

    currentIndex += 1;
    currentNode = currentNode.next;
  }

  return result;
}

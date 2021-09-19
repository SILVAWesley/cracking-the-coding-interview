import { LinkedList, LinkedNode } from "../../datastructures/linkedlist";

/**
 * Write code to partition a linked list around a value x, such that all nodes less than x come
 * before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
 * to be after the elements less than x (see below). The partition element x can appear anywhere in the
 * "right partition"; it does not need to appear between the left and right partitions
 */
export function partition(list: LinkedList<number>, value: number) {
  let currentNode = list.root;
  let lastNode = null;

  while (currentNode) {
    lastNode = currentNode;
    currentNode = currentNode.next;
  }

  currentNode = lastNode;

  while (currentNode) {
    let prevNode = currentNode.previous;

    if (currentNode.content >= value) {
      // Place element in the end if it is root
      if (!currentNode.previous) {
        list.root = list.root.next;
      } else {
        currentNode.previous.next = currentNode.next;
      }

      // Place current element in the end
      lastNode.next = currentNode;
      currentNode.next = null;
      currentNode.previous = lastNode;

      // Mark as new last element
      lastNode = currentNode;
    }

    currentNode = prevNode;
  }
}

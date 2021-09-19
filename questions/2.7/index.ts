import { LinkedList, LinkedNode } from "../../datastructures/linkedlist";

/**
 * Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth
 * node of the first linked list is the exact same node (by reference) as the jth node of the second
 * linked list, then they are intersecting.
 */
export function checkIntersection(
  list1: LinkedNode<string>,
  list2: LinkedNode<string>
) {
  let currentNode = list1;

  let length1 = 0;
  let lastNode1 = null;

  while (currentNode) {
    length1++;

    if (!currentNode.next) {
      lastNode1 = currentNode;
    }

    currentNode = currentNode.next;
  }

  currentNode = list2;

  let length2 = 0;
  let lastNode2 = null;

  while (currentNode) {
    length2++;

    if (!currentNode.next) {
      lastNode2 = currentNode;
    }

    currentNode = currentNode.next;
  }

  if (lastNode1 != lastNode2) {
    return { is: false, intersection: null };
  }

  let currentNode1 = list1;
  let currentNode2 = list2;

  for (let i = 0; i < Math.min(length1, length2); i++) {
    console.log(currentNode1.content);
    if (currentNode1 == currentNode2) {
      return { is: true, intersection: currentNode1 };
    }

    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
  }

  return { is: false, intersection: null };
}

//1 -> 20 -> 30 -> 40
//5 -> 500 -> 2 -> 30 -> 40

//Hints:#20, #45, #55, #65, #76, #93, #111, #120, #129

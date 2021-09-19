import { LinkedList, LinkedNode } from "../../datastructures/linkedlist";

/**
 * Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth
 * node of the first linked list is the exact same node (by reference) as the jth node of the second
 * linked list, then they are intersecting.
 *
 * O(A + B)
 */
export function checkIntersection(
  node1: LinkedNode<string>,
  node2: LinkedNode<string>
) {
  let currentNode1 = node1;
  let currentNode2 = node2;
}

//1 -> 20 -> 30 -> 40
//5 -> 500 -> 2 -> 30 -> 40

//Hints:#20, #45, #55, #65, #76, #93, #111, #120, #129

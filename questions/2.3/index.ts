import { LinkedNode } from "../../datastructures/linkedlist";

/**
 *   Implement an algorithm to delete a node in the middle (i.e., any node but
 * the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
 * that node.
 */
export function deleteMiddleNode(node: LinkedNode<string>) {
  let currentNode = node;

  currentNode.content = currentNode.next.content;
  currentNode.next = currentNode.next.next;
}

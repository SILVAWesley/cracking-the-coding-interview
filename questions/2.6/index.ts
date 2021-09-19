import { LinkedList } from "../../datastructures/linkedlist";

/**
 *  Implement a function to check if a linked list is a palindrome.
 */
export function checkPalindromeLinkedList(list: LinkedList<string>) {
  let currentNode = list.root;
  let lastNode = null;
  let length = 0;

  if (!list.root) {
    return true;
  }

  while (currentNode.next) {
    length++;
    currentNode = currentNode.next;
  }

  length++;
  lastNode = currentNode;

  let normalNode = list.root;
  let reverseNode = lastNode;

  for (let i = 0; i < Math.ceil(length / 2); i++) {
    if (normalNode.content !== reverseNode.content) {
      return false;
    }

    normalNode = normalNode.next;
    reverseNode = reverseNode.previous;
  }

  return true;
}

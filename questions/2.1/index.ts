import { LinkedList } from "../../datastructures/LinkedList";

/**
 *  Write code to remove duplicates from an unsorted linked list.
 */
export function removeDups(list: LinkedList<string>) {
  let currentNode = list.root;
  let characterMap = {};

  while (currentNode.next) {
    if (!characterMap[currentNode.content]) {
      characterMap[currentNode.content] = 1;
    } else {
      currentNode.previous.next = currentNode.next;
      currentNode.next.previous = currentNode.previous;
    }

    currentNode = currentNode.next;
  }

  if (!currentNode.next) {
    if (characterMap[currentNode.content]) {
      currentNode.previous.next = null;
    }
  }
}

export function recursiveRemoveNoBuffer(list: LinkedList<string>) {
  let currentNode = list.root;

  while (currentNode.next) {
    let currentNode2 = currentNode.next;

    while (currentNode2.next) {
      if (currentNode2.content === currentNode.content) {
        currentNode2.previous.next = currentNode2.next;
        currentNode2.next.previous = currentNode2.previous;
      }

      currentNode2 = currentNode2.next;
    }

    if (!currentNode2.next && currentNode2.content === currentNode.content) {
      console.log(
        "curNode",
        currentNode,
        "curNode2",
        currentNode2.previous.next
      );
      //currentNode2.prev.next = null;
    }

    currentNode = currentNode.next;
  }
}

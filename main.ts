import { LinkedList } from "./datastructures/linkedlist";
import { returnKthToLast } from "./questions/2.2";
import { deleteMiddleNode } from "./questions/2.3";

function testLinkedList() {
  const linkedList = new LinkedList();

  linkedList.add("hello");
  linkedList.remove("!");
  linkedList.add("you");

  linkedList.remove("!");

  console.log(linkedList.toString());
}

function testKthToLast() {
  const linkedList = new LinkedList<string>();
  linkedList.add("hello");
  linkedList.add("you");

  console.log(returnKthToLast(linkedList, 1));
}

function testDeleteMiddleNode() {
  const linkedList = new LinkedList<string>();
  linkedList.add("hello");
  linkedList.add("you");
  linkedList.add("!");

  deleteMiddleNode(linkedList.root.next);
  console.log(linkedList.toString());
}

testDeleteMiddleNode();

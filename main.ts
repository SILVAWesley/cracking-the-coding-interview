/*
 * TODO:
 * 2.5 - Recursive solution
 * 2.6 - Recursive solution
 */

import { LinkedList } from "./datastructures/linkedlist";
import { returnKthToLast } from "./questions/2.2";
import { deleteMiddleNode } from "./questions/2.3";
import { partition } from "./questions/2.4";
import { sumLists } from "./questions/2.5";
import { checkPalindromeLinkedList } from "./questions/2.6";
import { checkIntersection } from "./questions/2.7";

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

function testPartition() {
  const linkedList = new LinkedList<number>();

  linkedList.add(11);
  linkedList.add(5);
  linkedList.add(8);
  linkedList.add(5);
  linkedList.add(10);
  linkedList.add(2);
  linkedList.add(1);

  partition(linkedList, 5);

  console.log(linkedList.toString());
}

function testSumLists() {
  const linkedList1 = new LinkedList<number>();

  linkedList1.add(9);
  linkedList1.add(7);
  linkedList1.add(8);

  const linkedList2 = new LinkedList<number>();

  linkedList2.add(6);
  linkedList2.add(8);
  linkedList2.add(5);

  console.log(sumLists(linkedList1, linkedList2).toString());
}

function testPalindromeLinkedList() {
  const linkedList = new LinkedList<string>();

  console.log(checkPalindromeLinkedList(linkedList));
}

function testCheckIntersection() {
  const linkedList = new LinkedList<string>();

  linkedList.add("hello1");
  linkedList.add("hello2");
  linkedList.add("hello3");
  linkedList.add("hello4");

  console.log(checkIntersection(linkedList.root, linkedList.root.next));
}

testCheckIntersection();

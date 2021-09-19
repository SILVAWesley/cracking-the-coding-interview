/*
 * TODO:
 * 2.5 - Recursive solution
 * 2.6 - Recursive solution
 * 2.7 - Solution
 */

import { LinkedList } from "./datastructures/linkedlist";
import { Stack } from "./datastructures/stack";
import { Queue } from "./datastructures/queue";
import { returnKthToLast } from "./questions/2.2";
import { deleteMiddleNode } from "./questions/2.3";
import { partition } from "./questions/2.4";
import { sumLists } from "./questions/2.5";
import { checkPalindromeLinkedList } from "./questions/2.6";
import { checkIntersection } from "./questions/2.7";
import { checkLoopDetection } from "./questions/2.8";
import { StackMin } from "./questions/3.2";

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

function testLoopDetection() {
  const linkedList = new LinkedList<string>();

  linkedList.add("hello1");
  linkedList.add("hello2");
  linkedList.add("hello3");
  linkedList.add("hello4");
  linkedList.add("hello1");

  console.log(checkLoopDetection(linkedList));
}

function testStack() {
  const stack = new Stack<number>();

  stack.push(4);
  stack.push(6);
  stack.push(1);
  stack.push(80);
  console.log(stack.pop());

  console.log(stack.toString());
}

function testQueue() {
  const queue = new Queue<number>();

  queue.add(2);
  queue.remove();
  queue.add(2);
  queue.add(3);
  queue.add(4);
  queue.add(5);
  queue.add(6);
  queue.add(7);
  queue.add(8);

  queue.remove();

  console.log(queue.toString());
}

function testStackMin() {
  const stack = new StackMin();

  stack.push(2);
  stack.push(4);
  stack.push(1);
  stack.push(10);

  stack.pop();
  stack.pop();

  console.log(stack.getMin());
}

testStackMin();

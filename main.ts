/*
 * TODO:
 * 2.5 - Recursive solution
 * 2.6 - Recursive solution
 * 2.7 - Solution
 */

import { Hashtable } from "./datastructures/hashtable";
import { LinkedList } from "./datastructures/linkedlist";
import { ArrayList } from "./datastructures/arraylist";
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
import { ThreeInOne } from "./questions/3.1";
import { allUnique } from "./questions/1.1";
import { checkPermutation } from "./questions/1.2";
import { urlify, urlify2 } from "./questions/1.3";
import { checkPalindromePermutation } from "./questions/1.4";
import { checkOneAway, checkOneAway2 } from "./questions/1.5";
import { compressString, compressString2 } from "./questions/1.6";
import { rotateMatrix } from "./questions/1.7";
import { zeroMatrix } from "./questions/1.8";
import { StackOfPlates } from "./questions/3.3";
import { MyQueue } from "./questions/3.4";
import { sortStack } from "./questions/3.5";
import { AnimalShelter } from "./questions/3.6";
import { BfsGraphNode, routeBetweenNodes } from "./questions/4.1";

const testHashtable = () => {
  const myTable = new Hashtable<number>(10);

  myTable.add("mystring", 100);

  console.log(myTable.get("mystring"));
  console.log(myTable.remove("mystring"));

  console.log(myTable.toString());
};

const testArraylist = () => {
  const myArrayList = new ArrayList<string>(1);
  myArrayList.add("hello");
  myArrayList.add("231");
  myArrayList.add("444");
  myArrayList.add("231232");
  myArrayList.add("231232");
  console.log(myArrayList.get(4));
  console.log(myArrayList.remove(0));
  console.log(myArrayList.remove(3));
  console.log(myArrayList.remove(2));
  console.log(myArrayList.toString());
};

const testAllUnique = () => {
  console.log(allUnique(""));
};

const testCheckPermutation = () => {
  console.log(checkPermutation("hello", "hello"));
};

const testURLify = () => {
  console.log(urlify("Mr John Smith", 15));
  console.log(urlify2("Mr John Smith"));
};

const testPermutationPalindrome = () => {
  console.log(checkPalindromePermutation("tac coa"));
};

const testCheckOneAway = () => {
  console.log(checkOneAway("pale", "ple"));
  console.log(checkOneAway("pales", "pale"));
  console.log(checkOneAway("pale", "bale"));
  console.log(checkOneAway("plea", "ple"));
  console.log(checkOneAway("plea", "plea"));
  console.log(checkOneAway("pale", "bake"));
};

const testCheckOneAway2 = () => {
  console.log(checkOneAway2("pale", "ple"));
  console.log(checkOneAway2("pales", "pale"));
  console.log(checkOneAway2("plea", "ple"));
  console.log(checkOneAway2("pale", "bale"));
  console.log(checkOneAway2("plea", "plea"));
  console.log(checkOneAway2("pale", "bake"));
};

const testCompressString = () => {
  console.log(compressString("hellooooooooooo"));
  console.log(compressString("aabcccccaaa"));
};

const testCompressString2 = () => {
  console.log(compressString2("hellooooooooooo"));
  console.log(compressString2("aabcccccaaa"));
  console.log(compressString("hellooooooooooo"));
  console.log(compressString("aabcccccaaa"));
};

const testRotateMatrix = () => {
  console.log(
    rotateMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  );

  console.log(
    rotateMatrix([
      [1, 2],
      [3, 4],
    ])
  );
};

const testZeroMatrix = () => {
  console.log(
    zeroMatrix([
      [1, 0, 1],
      [1, 1, 1],
      [1, 2, 1],
    ])
  );
};

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

function testThreeInOne() {
  const stack = new ThreeInOne();

  stack.push(0, 0);
  stack.push(1, 0);
  stack.push(2, 0);

  stack.push(5, 1);

  stack.pop(1);
  stack.pop(0);
  console.log(stack.peek(0));

  console.log(stack.toString());
}

function testStackOfPlates() {
  const stack = new StackOfPlates(1);

  stack.push(5);
  stack.push(6);
  stack.push(7);
  stack.push(8);
  stack.pop();
  stack.pop();
  stack.push(10);
  console.log(stack.toString());
}

function testQueueViaStack() {
  const queue = new MyQueue();

  queue.add(1);
  queue.add(2);

  console.log(queue.peek());
}

function testSortStack() {
  const stack = new Stack<number>();

  stack.push(1);
  stack.push(2);
  stack.push(5);
  stack.push(5);
  stack.push(8);
  stack.push(10);

  console.log(sortStack(stack).toString());
}

function testAnimalShelter() {
  const shelter = new AnimalShelter();

  shelter.enqueue("dog");
  shelter.enqueue("cat");
  shelter.dequeueAny();
  shelter.dequeueAny();
  shelter.enqueue("dog");
  shelter.dequeueCat();
  shelter.dequeueDog();
  shelter.enqueue("cat");
  shelter.enqueue("cat");
  shelter.enqueue("dog");
  shelter.enqueue("cat");
  shelter.dequeueDog();
  shelter.dequeueCat();
  console.log(shelter.toString());
}

function testRouteBetweenNodes() {
  const node0: BfsGraphNode<number> = new BfsGraphNode<number>(0);
  const node1: BfsGraphNode<number> = new BfsGraphNode<number>(1);
  const node2: BfsGraphNode<number> = new BfsGraphNode<number>(2);
  const node3: BfsGraphNode<number> = new BfsGraphNode<number>(3);
  const node4: BfsGraphNode<number> = new BfsGraphNode<number>(4);
  const node5: BfsGraphNode<number> = new BfsGraphNode<number>(5);

  node0.children = [node1, node4, node5];
  node1.children = [node3, node4];
  node2.children = [node1];
  node3.children = [node2, node4];
  node4.children = [];
  node5.children = [];

  console.log(routeBetweenNodes(node2, node5));
}

testCompressString2();

import { Console } from "console";
import { LinkedList, LinkedNode } from "../../datastructures/linkedlist";

/**
 * You have two numbers represented by a linked list, where each node contains a single
 * digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
 * function that adds the two numbers and returns the sum as a linked list.
 */
export function sumLists(num1: LinkedList<number>, num2: LinkedList<number>) {
  let currentNode = num1.root;

  let mult = 1;

  let trueNum1 = 0;

  while (currentNode) {
    trueNum1 += mult * currentNode.content;
    mult *= 10;
    currentNode = currentNode.next;
  }

  currentNode = num2.root;
  mult = 1;

  let trueNum2 = 0;

  while (currentNode) {
    trueNum2 += mult * currentNode.content;
    mult *= 10;
    currentNode = currentNode.next;
  }

  mult = 10;

  let result = trueNum1 + trueNum2;

  console.log(result);

  const summedNum = new LinkedList<number>();

  while (result > 0) {
    summedNum.add(result % mult);
    result = Math.floor(result / 10);
  }

  return summedNum;
}

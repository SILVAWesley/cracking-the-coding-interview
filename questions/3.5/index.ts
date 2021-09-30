import { IQueue } from "../../datastructures/queue/IQueue";
import { Stack } from "../../datastructures/stack";

/**
 * Write a program to sort a stack such that the smallest items are on the top. You can use
 * an additional temporary stack, but you may not copy the elements into any other data structure
 * (such as an array). The stack supports the following operations: push, pop, peek, and is Empty.
 */
export function sortStack(stack: Stack<number>) {
  const sortedStack = new Stack<number>();

  while (!stack.isEmpty()) {
    if (sortedStack.isEmpty() || sortedStack.peek() >= stack.peek()) {
      sortedStack.push(stack.pop());
      console.log(stack.isEmpty());
    } else {
      console.log("hello");
      const tempItem = stack.pop();

      while (tempItem < sortedStack.peek()) {
        stack.push(sortedStack.pop());
      }

      sortedStack.push(tempItem);
    }
  }

  return sortedStack;
}

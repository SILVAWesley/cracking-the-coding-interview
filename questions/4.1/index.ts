import { GraphNode } from "../../datastructures/graph/GraphNode";
import { Queue } from "../../datastructures/queue/Queue";

export class BfsGraphNode<T> {
  content: T;
  children: BfsGraphNode<T>[];
  marked: boolean;

  constructor(content: T, children?: BfsGraphNode<T>[]) {
    this.content = content;
    this.children = children;
    this.marked = false;
  }
}

/**
 * Given a directed graph, design an algorithm to find out whether there is a
 * route between two nodes.
 */
export function routeBetweenNodes(
  x: BfsGraphNode<number>,
  y: BfsGraphNode<number>
) {
  const queue = new Queue<BfsGraphNode<number>>();

  x.marked = true;
  queue.add(x);

  if (x === y) {
    return true;
  }

  while (!queue.isEmpty()) {
    const currentNode = queue.remove();

    if (currentNode === y) {
      return true;
    }

    for (const node of currentNode.children) {
      if (node.marked === false) {
        node.marked = true;
        queue.add(node);
      }
    }
  }

  return false;
}

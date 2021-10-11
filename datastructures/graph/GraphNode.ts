export class GraphNode<T> {
  content: T;
  children: GraphNode<T>[];

  constructor(content: T, children: GraphNode<T>[]) {
    this.content = content;
    this.children = children;
  }
}

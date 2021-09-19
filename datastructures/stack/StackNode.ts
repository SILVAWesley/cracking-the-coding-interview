export class StackNode<T> {
  constructor(public content: T, public next: StackNode<T>) {}
}

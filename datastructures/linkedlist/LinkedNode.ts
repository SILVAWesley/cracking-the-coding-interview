export class LinkedNode<T> {
  constructor(
    public next: LinkedNode<T>,
    public previous: LinkedNode<T>,
    public content: T
  ) {}
}

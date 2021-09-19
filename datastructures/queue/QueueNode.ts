export class QueueNode<T> {
  constructor(public content: T, public next: QueueNode<T>) {}
}

export interface IQueue<T> {
  remove(): T;
  add(item: T): boolean;
  peek(): T;
  isEmpty(): boolean;
  toString(): string;
}

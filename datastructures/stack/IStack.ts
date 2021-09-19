export interface IStack<T> {
  pop(): T;
  push(item: T): boolean;
  peek(): T;
  isEmpty(): boolean;
  toString(): string;
}

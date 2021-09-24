export interface IArrayList<T> {
  add: (value: T) => boolean;
  remove: (index: number) => T;
  get: (index: number) => T;
  toString: () => string;
}

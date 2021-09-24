export interface IHashtable<T> {
  add: (key: string, value: T) => boolean;
  remove: (key: string) => T;
  get: (key: string) => T;
  toString: () => string;
}

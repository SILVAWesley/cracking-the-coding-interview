export interface IStringBuilder {
  append: (str: string) => void;
  clear: () => void;
  toString: () => string;
}

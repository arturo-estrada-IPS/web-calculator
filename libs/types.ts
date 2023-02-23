export class Token {
  constructor(public type: tokenTypes, public value: string) {}
}

export type tokenTypes =
  | "number"
  | "letter"
  | "left parenthesis"
  | "right parenthesis"
  | "operator";

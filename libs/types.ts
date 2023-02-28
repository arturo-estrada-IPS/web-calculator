export class Token {
  constructor(public type: tokenTypes, public value: string | operator) {}
}

export type tokenTypes =
  | "number"
  | "function"
  | "left parenthesis"
  | "right parenthesis"
  | "operator"
  | "comma";

export type operator = "^" | "*" | "/" | "+" | "-" | "(" | ")";

export interface Operator {
  precedence: number;
  associativity: "right" | "left";
}

export enum Operators {
  SUM = "+",
  SUBTRACTION = "-",
  MULTIPLICATION = "*",
  DIVISION = "/",
  EXPONENT = "^",
  LEFT_PARENTHESIS = "(",
  RIGHT_PARENTHESIS = ")",
}

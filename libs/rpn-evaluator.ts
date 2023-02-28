import {
  divide,
  max,
  min,
  multiply,
  pow,
  sqrt,
  subtract,
  sum,
  trig,
} from "./operators";
import { Functions, Operators } from "./types/types";
import { isMathFunction, isNumber, isOperator } from "./utils";

/**
 * Parse expression to number
 *
 * @param exp
 * @returns number
 */
function toNumber(exp: string) {
  if (exp === "pi") {
    return Math.PI;
  } else if (exp === "e") {
    return Math.E;
  } else {
    return +exp;
  }
}

/**
 * Evaluates valid postfix notation expressions
 *
 * @param rpn
 * @returns string
 */
export function evalRpnExpression(rpn: string[]) {
  const stack: string[] = [];

  // FOR EACH read token
  rpn.forEach((token) => {
    // IF token is number push to stack
    if (isNumber(token)) {
      stack.push(token);
    }

    /**
     * IF token is operator pop two elements from the stack
     * THEN evaluate them according to the operator
     * THEN push result back to stack
     */
    if (isOperator(token)) {
      const a = toNumber(stack.pop() as string);
      const b = toNumber(stack.pop() as string);

      switch (token) {
        case Operators.SUM: {
          const result = sum(b, a);
          stack.push(`${result}`);
          break;
        }
        case Operators.SUBTRACTION: {
          const result = subtract(b, a);
          stack.push(`${result}`);
          break;
        }
        case Operators.MULTIPLICATION: {
          const result = multiply(b, a);
          stack.push(`${result}`);
          break;
        }
        case Operators.DIVISION: {
          const result = divide(b, a);
          stack.push(`${result}`);
          break;
        }
        case Operators.EXPONENT: {
          const result = pow(b, a);
          stack.push(`${result}`);
          break;
        }
      }
    }

    /**
     * IF token is function  element(s) from the stack
     * THEN evaluate them according to the functions specification
     * THEN push result back to stack
     */
    if (isMathFunction(token)) {
      // ["2", "3", "max", "3", "/", "pi", "*", "sin"]
      switch (token) {
        case Functions.SIN: {
          const a = toNumber(stack.pop() as string);
          const result = trig(Functions.SIN, a);
          stack.push(`${result}`);
          break;
        }
        case Functions.COS: {
          const a = toNumber(stack.pop() as string);
          const result = trig(Functions.COS, a);
          stack.push(`${result}`);
          break;
        }
        case Functions.TAN: {
          const a = toNumber(stack.pop() as string);
          const result = trig(Functions.TAN, a);
          stack.push(`${result}`);
          break;
        }
        case Functions.SQRT: {
          const a = toNumber(stack.pop() as string);
          const result = sqrt(a);
          stack.push(`${result}`);
          break;
        }
        case Functions.MAX: {
          const a = toNumber(stack.pop() as string);
          const b = toNumber(stack.pop() as string);
          const result = max(a, b);
          stack.push(`${result}`);
          break;
        }
        case Functions.MIN: {
          const a = toNumber(stack.pop() as string);
          const b = toNumber(stack.pop() as string);
          const result = min(a, b);
          stack.push(`${result}`);
          break;
        }
      }
    }
  });

  // IF stack has less than 1 or more than one elements the expression is invalid
  if (stack.length !== 1) {
    console.warn(stack);
    throw new Error("invalid expression");
  }

  // pop element from stack and return
  return stack.pop();
}

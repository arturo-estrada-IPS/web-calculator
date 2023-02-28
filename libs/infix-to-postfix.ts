import { Operator, operator, Operators, Token } from "./types";
import { isMathFunction } from "./utils";

/**
 * turns infix tokenized array of strings into RPN (Reverse Polish Notation)
 * Source: https://en.wikipedia.org/wiki/Shunting_yard_algorithm
 *
 * @param tokens
 * @returns string[]
 */
export function infixToPostfix(tokens: Token[]) {
  const outputQueue: string[] = [];
  const operatorStack: operator[] = [];

  /**
   * representation of precedence and associativity table as object
   */
  const operators: { [key: string]: Operator } = {
    [Operators.EXPONENT]: {
      precedence: 4,
      associativity: "right",
    },
    [Operators.MULTIPLICATION]: {
      precedence: 3,
      associativity: "left",
    },
    [Operators.DIVISION]: {
      precedence: 3,
      associativity: "left",
    },
    [Operators.SUM]: {
      precedence: 2,
      associativity: "left",
    },
    [Operators.SUBTRACTION]: {
      precedence: 2,
      associativity: "left",
    },
  };

  tokens.forEach((token) => {
    // 1. read token
    // 2. IF token is:
    //    a) a number: put it in the output queue
    if (token.type === "number") {
      outputQueue.push(token.value);
    }

    //    b) a function: put it in the operator stack
    else if (token.type === "function") {
      operatorStack.push(token.value as operator);
    }

    //    c) an operator:
    else if (token.type === "operator") {
      const op1 = token.value;
      let op2 = operatorStack[operatorStack.length - 1];

      /**
       * WHILE there is an operator o2 at the top of the operator stack
       * AND is not left parenthesis
       * AND (o2 has greater precedence than o1
       *  OR (o1 and o2 have the same precedence
       *    AND o1 is left-associative
       *  )
       * ):
       */
      while (
        operatorStack.length > 0 &&
        op2 !== Operators.LEFT_PARENTHESIS &&
        (operators[op2].precedence > operators[op1].precedence ||
          (operators[op1].precedence === operators[op2].precedence &&
            operators[op1].associativity === "left"))
      ) {
        // Pop o2 from the operator stack and into the the output queue
        const poppedOperator = operatorStack.pop();
        outputQueue.push(poppedOperator as string);
        op2 = operatorStack[operatorStack.length - 1];
      }
      // Push o1 into the operator stack
      operatorStack.push(op1 as operator);
    }

    //  d) left parenthesis: push onto the operator stack
    else if (token.type === "left parenthesis") {
      operatorStack.push(token.value as operator);
    }

    //  e) right parenthesis:
    else if (token.type === "right parenthesis") {
      /**
       * WHILE the operator at the top of the operator stack is not a left parenthesis:
       */
      while (
        operatorStack[operatorStack.length - 1] !== Operators.LEFT_PARENTHESIS
      ) {
        // (validate) IF the stack runs out without finding left parenthesis then there are mismatched parenthesis
        if (
          operatorStack.length === 1 &&
          operatorStack[operatorStack.length - 1] !==
            Operators.RIGHT_PARENTHESIS
        ) {
          throw new Error("Mismatched Parenthesis");
        }
        // pop the operator from the operator stack into the output queue
        const poppedOperator = operatorStack.pop();
        outputQueue.push(poppedOperator as string);
      }
      // discard the left parenthesis at the top of the stack
      operatorStack.pop();
      // IF there is a function token at the top of the operation stack THEN: pop the function onto the output queue
      if (isMathFunction(operatorStack[operatorStack.length - 1])) {
        const poppedFunction = operatorStack.pop();
        outputQueue.push(poppedFunction as string);
      }
    }
  });

  // WHILE there are other items in the operator stack: pop item onto the output queue
  while (operatorStack.length > 0) {
    // IF the operator token on the top of the stack is a parenthesis, then there are mismatched parentheses.
    if (
      operatorStack[operatorStack.length - 1] === Operators.LEFT_PARENTHESIS
    ) {
      throw new Error("Mismatched Parenthesis");
    }
    const poppedItem = operatorStack.pop();
    outputQueue.push(poppedItem as string);
  }

  return outputQueue;
}

import { tokenTypes, Token } from "./types";
import {
  isComma,
  isDecimal,
  isLeftParenthesis,
  isLetter,
  isNumber,
  isOperator,
  isRightParenthesis,
} from "./utils";

/**
 * converts a string into array of Token type
 *
 * @param strOperation
 * @returns Token []
 */
export function tokenize(strOperation: string) {
  const strToArray = strOperation.toLowerCase().replace(/\s/g, "").split("");
  const tokens: Token[] = [];

  const buffer = {
    number: "",
    function: "",
  };

  const pushBuffer = (bufferKey: "number" | "function", type: tokenTypes) => {
    // Validate for pi since it is a number
    if (buffer.function === "pi") {
      tokens.push(new Token("number", buffer.function));
      buffer.function = "";
    }
    // check if given buffer has elements to push to output
    else if (buffer[bufferKey].length > 0) {
      tokens.push(new Token(type, buffer[bufferKey]));
    }
  };

  strToArray.forEach((char) => {
    // IF char is number or decimal add to number buffer
    if (isNumber(char) || isDecimal(char)) {
      buffer.number += char;
    }
    /**
     * IF char is comma push to token output as comma type
     * THEN push number buffer and clear
     */
    //
    else if (isComma(char)) {
      pushBuffer("number", "number");
      tokens.push(new Token("comma", char));
      buffer.number = "";
    }
    /**
     * IF Char is operator push number buffer to output as number type
     * THEN push char to output as operator type and clear number buffer buffer
     */
    //
    else if (isOperator(char)) {
      pushBuffer("number", "number");
      tokens.push(new Token("operator", char));
      buffer.number = "";
    }
    /**
     * IF char is a letter push number buffer to output
     * THEN add character to letter buffer
     */
    //
    else if (isLetter(char)) {
      pushBuffer("number", "number");
      buffer.function += char;
    }
    /**
     * IF char is left parenthesis push letter buffer to output
     * THEN push left parenthesis to output and clear letter buffer
     */
    //
    else if (isLeftParenthesis(char)) {
      pushBuffer("function", "function");
      tokens.push(new Token("left parenthesis", char));
      buffer.function = "";
    }
    /**
     * IF char is right parenthesis push number buffer to output
     * THEN push right parenthesis to output as right parenthesis type and clear number buffer
     */
    //
    else if (isRightParenthesis(char)) {
      pushBuffer("number", "number");
      tokens.push(new Token("right parenthesis", char));
      buffer.number = "";
    }
  });

  // push remaining numbers and clear buffers
  pushBuffer("number", "number");
  buffer.function = "";
  buffer.number = "";

  return tokens;
}

/**
 * Convert Tokens array to string array
 *
 * @param tokens
 * @returns
 */
export function tokensToArray(tokens: Token[]) {
  return tokens.map(({ value }) => value);
}

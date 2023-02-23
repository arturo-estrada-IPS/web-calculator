import { tokenTypes, Token } from "./types";

export function tokenize(strOperation: string) {
  const strToArray = strOperation.toLowerCase().replace(/\s/g, "").split("");
  const tokens: Token[] = [];

  const buffer = {
    number: "",
    letter: "",
  };

  const pushBuffer = (bufferKey: "number" | "letter", type: tokenTypes) => {
    if (buffer[bufferKey].length > 0)
      tokens.push(new Token(type, buffer[bufferKey]));
  };

  strToArray.forEach((char) => {
    if (isNumber(char)) buffer.number += char;
    else if (isDecimal(char)) buffer.number += char;
    else if (isOperator(char)) {
      pushBuffer("number", "number");
      tokens.push(new Token("number", char));
      buffer.number = "";
    } else if (isLetter(char)) {
      pushBuffer("number", "number");
      buffer.letter += char;
    } else if (isLeftParenthesis(char)) {
      pushBuffer("letter", "letter");
      tokens.push(new Token("left parenthesis", char));
      buffer.letter = "";
    } else if (isRightParenthesis(char)) {
      pushBuffer("number", "number");
      tokens.push(new Token("right parenthesis", char));
      buffer.number = "";
    }
  });

  pushBuffer("number", "number");
  buffer.letter = "";
  buffer.number = "";

  return tokens;
}

export function tokensToArray(tokens: Token[]) {
  return tokens.map(({ value }) => value);
}

function isDecimal(character: string) {
  return character === ".";
}

function isNumber(character: string) {
  return /\d/.test(character);
}

function isLetter(character: string) {
  return /[a-z]/i.test(character);
}

function isOperator(character: string) {
  return /\+|-|\*|\/|\^/.test(character);
}

function isLeftParenthesis(character: string) {
  return character === "(";
}

function isRightParenthesis(character: string) {
  return character === ")";
}

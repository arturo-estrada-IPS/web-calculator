export function isDecimal(character: string) {
  return character === ".";
}

export function isComma(character: string) {
  return character === ",";
}

export function isNumber(exp: string) {
  const numConstants = ["e", "pi"];
  return /\d/.test(exp) || numConstants.indexOf(exp) > -1;
}

export function isLetter(character: string) {
  return /[a-z]/i.test(character);
}

export function isOperator(character: string) {
  return /\+|-|\*|\/|\^/.test(character);
}

export function isLeftParenthesis(character: string) {
  return character === "(";
}

export function isRightParenthesis(character: string) {
  return character === ")";
}

export function isMathFunction(str: string) {
  const allowedFunctions = ["sin", "cos", "tan", "max", "min", "sqrt"];
  return allowedFunctions.indexOf(str) > -1;
}

import { infixToPostfix } from "./infix-to-postfix";
import { evalRpnExpression } from "./rpn-evaluator";
import { tokenize } from "./tokenize";

export function evaluateMathExp(exp: string) {
  const tokensFromExp = tokenize(exp);
  const rpnFromTokens = infixToPostfix(tokensFromExp);
  return evalRpnExpression(rpnFromTokens);
}

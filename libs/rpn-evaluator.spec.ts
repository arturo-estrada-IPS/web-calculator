import { evalRpnExpression } from "./rpn-evaluator";

describe("evalRpnExpression", () => {
  describe("function definition", () => {
    expect(evalRpnExpression).toBeDefined();
  });

  describe("basic arithmetic operations", () => {
    it('should equal to 7 with input ["3", "4", "+"]', () => {
      const input = ["3", "4", "+"];
      const output = "7";

      expect(evalRpnExpression(input)).toBe(output);
    });

    it('should equal to 7 with input ["3", "4", "2", "*", "+"]', () => {
      const input = ["3", "4", "2", "*", "+"];
      const output = "11";

      expect(evalRpnExpression(input)).toBe(output);
    });

    it('should equal to 1 with input ["3", "4", "2", "*", "1", "5", "-", "/", "+"]', () => {
      const input = ["3", "4", "2", "*", "1", "5", "-", "/", "+"];
      const output = "1";

      expect(evalRpnExpression(input)).toBe(output);
    });

    it('should equal to 3.0001220703125 with input ["3", "4", "2", "*", "1", "5", "-", "2", "3", "^", "^", "/", "+",]', () => {
      const input = [
        "3",
        "4",
        "2",
        "*",
        "1",
        "5",
        "-",
        "2",
        "3",
        "^",
        "^",
        "/",
        "+",
      ];
      const output = "3.0001220703125";

      expect(evalRpnExpression(input)).toBe(output);
    });
  });

  describe("operations with functions", () => {
    it('should be close to 0 with input ["2", "3", "max", "3", "/", "pi", "*", "sin"]', () => {
      const input = ["2", "3", "max", "3", "/", "pi", "*", "sin"];
      const expectedOutput = "0";
      const output = evalRpnExpression(input);

      expect(output).toBe(expectedOutput);
    });
  });
});

import { infixToPostfix } from "./infix-to-postfix";
import { tokenize } from "./tokenize";

describe("infixToPostix: turn a tokenized expression into a RPN set of tokens", () => {
  describe("function definition", () => {
    it("should be defined", () => {
      expect(infixToPostfix).toBeTruthy();
    });
  });

  describe("input: basic operations", () => {
    it("should convert to PRN with input: 3 + 4", () => {
      const input = "3 + 4";
      const expectedOutput = ["3", "4", "+"];
      const tokens = tokenize(input);

      const output = infixToPostfix(tokens);
      expect(output).toEqual(expectedOutput);
    });

    it("should convert to PRN with input: 3 + 4 * 2", () => {
      const input = "3 + 4 * 2";
      const expectedOutput = ["3", "4", "2", "*", "+"];
      const tokens = tokenize(input);

      const output = infixToPostfix(tokens);
      expect(output).toEqual(expectedOutput);
    });

    it("should convert to PRN with input: 3 + 4 * 2 / (1 - 5)", () => {
      const input = "3 + 4 * 2 / (1 - 5)";
      const expectedOutput = ["3", "4", "2", "*", "1", "5", "-", "/", "+"];
      const tokens = tokenize(input);

      const output = infixToPostfix(tokens);
      expect(output).toEqual(expectedOutput);
    });

    it("should convert to PRN with input: 3 + 4 * 2 / (1 - 5)^2", () => {
      const input = "3 + 4 * 2 / (1 - 5)^2";
      const expectedOutput = [
        "3",
        "4",
        "2",
        "*",
        "1",
        "5",
        "-",
        "2",
        "^",
        "/",
        "+",
      ];
      const tokens = tokenize(input);

      const output = infixToPostfix(tokens);
      expect(output).toEqual(expectedOutput);
    });

    it("should convert to PRN with input: 3 + 4 * 2 / (1 - 5)^2^3", () => {
      const input = "3 + 4 * 2 / (1 - 5)^2^3";
      const expectedOutput = [
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
      const tokens = tokenize(input);

      const output = infixToPostfix(tokens);
      expect(output).toEqual(expectedOutput);
    });
  });

  describe("input: functions and constants", () => {
    it("should convert to RPN with input: sin(max(2,3) / 3 * pi)", () => {
      const input = "sin(max(2,3) / 3 * pi)";
      const expectedOutput = ["2", "3", "max", "3", "/", "pi", "*", "sin"];
      const tokens = tokenize(input);
      const output = infixToPostfix(tokens);

      expect(output).toEqual(expectedOutput);
    });

    it("should convert to RPN with input: sqrt(2 - 3)", () => {
      const input = "sqrt(2 - 3)";
      const expectedOutput = ["2", "3", "-", "sqrt"];
      const tokens = tokenize(input);
      const output = infixToPostfix(tokens);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe("mismatched parenthesis", () => {
    it("should throw error if parenthesis are mismatched", () => {
      const input = "4 * 3 - (1-3";
      const tokens = tokenize(input);

      try {
        infixToPostfix(tokens);
      } catch (e) {
        expect((e as any)["message"]).toBe("Mismatched Parenthesis");
      }
    });
  });
});

import { tokenize, tokensToArray } from "./tokenize";

describe("tokenize lib: convert math operation to set of tokens", () => {
  describe("input1: numbers with simple operators", () => {
    it("should tokenize with the following input: 3 + 4 * 3 * 3 + 2^2", () => {
      const input = "3 + 4 * 3 * 3 + 2^2";
      const expectedResult = [
        "3",
        "+",
        "4",
        "*",
        "3",
        "*",
        "3",
        "+",
        "2",
        "^",
        "2",
      ];

      const tokens = tokenize(input);
      const result = tokensToArray(tokens);

      expect(tokens).toHaveLength(result.length);
      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("input2: numbers, simple operations and trigonometric functions", () => {
    it("it should tokenize with the following input: 34.5 + 4^2 * 3.33 * cos(12)", () => {
      const input = "34.5 + 4^2 * 3.33 * cos(12)";
      const expectedResult = [
        "34.5",
        "+",
        "4",
        "^",
        "2",
        "*",
        "3.33",
        "*",
        "cos",
        "(",
        "12",
        ")",
      ];

      const tokens = tokenize(input);
      const result = tokensToArray(tokens);

      expect(tokens).toHaveLength(result.length);
      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });

    it("should tokenize with the following input: 8 * sin(8)^2 + 34.9", () => {
      const input = "8 * sin(8)^2 + 34.9";
      const expectedResult = [
        "8",
        "*",
        "sin",
        "(",
        "8",
        ")",
        "^",
        "2",
        "+",
        "34.9",
      ];

      const tokens = tokenize(input);
      const result = tokensToArray(tokens);

      expect(tokens).toHaveLength(result.length);
      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("parenthesis and nested parenthesis", () => {
    it("should tokenize the following input: 3 + 4 * 2 / (1 - 5)^2^3", () => {
      const input = "3 + 4 * 2 / (1 - 5)^2^3";
      const expectedResult = [
        "3",
        "+",
        "4",
        "*",
        "2",
        "/",
        "(",
        "1",
        "-",
        "5",
        ")",
        "^",
        "2",
        "^",
        "3",
      ];

      const tokens = tokenize(input);
      const result = tokensToArray(tokens);

      expect(tokens).toHaveLength(result.length);
      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });

    it("should tokenize the following input: (5.9-3)*6-((6*7)^2 -2) -1", () => {
      const input = "(5.9-3)*6-((6*7)^2 -2) -1";
      const expectedResult = [
        "(",
        "5.9",
        "-",
        "3",
        ")",
        "*",
        "6",
        "-",
        "(",
        "(",
        "6",
        "*",
        "7",
        ")",
        "^",
        "2",
        "-",
        "2",
        ")",
        "-",
        "1",
      ];

      const tokens = tokenize(input);
      const result = tokensToArray(tokens);

      expect(tokens).toHaveLength(result.length);
      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });

    it("should tokenize with input sin(max(2,3) / 3 * pi)", () => {
      const input = "sin(max(2,3) / 3 * pi)";
      const expectedResult = [
        "sin",
        "(",
        "max",
        "(",
        "2",
        ",",
        "3",
        ")",
        "/",
        "3",
        "*",
        "pi",
        ")",
      ];

      const tokens = tokenize(input);
      const result = tokensToArray(tokens);

      expect(tokens).toHaveLength(result.length);
      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });

    it("should tokenize with square root expressions", () => {
      const input = "sqrt(3-2)";
      const expectedResult = ["sqrt", "(", "3", "-", "2", ")"];
      const tokens = tokenize(input);
      const result = tokensToArray(tokens);

      expect(tokens).toHaveLength(result.length);
      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("pi and e as numbers", () => {
    it("should tokenize e as number", () => {
      const input = "e * 2";
      const tokens = tokenize(input);
      expect(tokens[0].type).toBe("number");
      expect(tokens[0].value).toBe("e");
    });

    it("should tokenize pi as number", () => {
      const input = "pi / 2";
      const expectedOutput = ["pi", "/", "2"];
      const tokens = tokenize(input);
      const output = tokensToArray(tokens);

      expect(tokens[0].type).toBe("number");
      expect(tokens[0].value).toBe("pi");
      expect(output).toHaveLength(expectedOutput.length);
      expect(output).toEqual(expectedOutput);
    });
  });
});

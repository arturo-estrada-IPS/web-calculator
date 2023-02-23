import { tokenize, tokensToArray } from "./tokenize";

describe("tokenize lib: convert math operation to set of tokens", () => {
  const input1 = "3 + 4 * 3 * 3 + 2^2";
  const input2 = "34.5 + 4^2 * 3.33 * cos(12)";
  const input3 = "8 * sin(8)^2 + 34.9";
  const input4 = "(5.9-3)*6-((6*7)^2 -2) -1";

  describe("input1: numbers with simple operators", () => {
    it("should return expected result for input1", () => {
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

      const tokens = tokenize(input1);
      const result = tokensToArray(tokens);

      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("input2: numbers, simple operations and trigonometric functions", () => {
    it("should return expected result for input2", () => {
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

      const tokens = tokenize(input2);
      const result = tokensToArray(tokens);

      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });

    it("should return expected result for input3", () => {
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

      const tokens = tokenize(input3);
      const result = tokensToArray(tokens);

      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });
  });

  describe("nested parenthesis", () => {
    it("should return expected result for input4", () => {
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

      const tokens = tokenize(input4);
      const result = tokensToArray(tokens);

      expect(result).toHaveLength(expectedResult.length);
      expect(result).toEqual(expectedResult);
    });
  });
});

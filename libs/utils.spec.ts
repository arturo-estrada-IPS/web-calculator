import {
  isComma,
  isDecimal,
  isLeftParenthesis,
  isLetter,
  isMathFunction,
  isNumber,
  isOperator,
  isRightParenthesis,
} from "./utils";

describe("utils", () => {
  describe("isDecimal", () => {
    it("should return true with input .", () => {
      const result = isDecimal(".");
      expect(result).toBe(true);
    });

    it("should return false with input 4", () => {
      const result = isDecimal("4");
      expect(result).toBe(false);
    });
  });

  describe("isComma", () => {
    it("should return true with input ,", () => {
      const result = isComma(",");
      expect(result).toBe(true);
    });

    it("should return false with input 4", () => {
      const result = isComma("4");
      expect(result).toBe(false);
    });
  });

  describe("isNumber", () => {
    it("should return true with input 4", () => {
      const result = isNumber("4");
      expect(result).toBe(true);
    });

    it("should return false with input d", () => {
      const result = isNumber("d");
      expect(result).toBe(false);
    });
  });

  describe("isLetter", () => {
    it("should return true with input s", () => {
      const result = isLetter("s");
      expect(result).toBe(true);
    });

    it("should return false with input 3", () => {
      const result = isLetter("3");
      expect(result).toBe(false);
    });
  });

  describe("isOperator", () => {
    it("should return true with inputs: +, -, *, /, ^", () => {
      const result1 = isOperator("+");
      const result2 = isOperator("-");
      const result3 = isOperator("*");
      const result4 = isOperator("/");
      const result5 = isOperator("^");

      expect(result1).toBe(true);
      expect(result2).toBe(true);
      expect(result3).toBe(true);
      expect(result4).toBe(true);
      expect(result5).toBe(true);
    });

    it("should return false with input 3", () => {
      const result = isOperator("3");
      expect(result).toBe(false);
    });
  });

  describe("isLeftParenthesis", () => {
    it("should return true with input (", () => {
      const result = isLeftParenthesis("(");
      expect(result).toBe(true);
    });

    it("should return false with input 3", () => {
      const result = isLeftParenthesis("3");
      expect(result).toBe(false);
    });
  });

  describe("isLeftParenthesis", () => {
    it("should return true with input )", () => {
      const result = isRightParenthesis(")");
      expect(result).toBe(true);
    });

    it("should return false with input 3", () => {
      const result = isRightParenthesis("3");
      expect(result).toBe(false);
    });
  });

  describe("isLeftParenthesis", () => {
    it("should return true with input sin", () => {
      const result = isMathFunction("sin");
      expect(result).toBe(true);
    });

    it("should return true with input cos", () => {
      const result = isMathFunction("cos");
      expect(result).toBe(true);
    });

    it("should return true with input tan", () => {
      const result = isMathFunction("tan");
      expect(result).toBe(true);
    });

    it("should return true with input max", () => {
      const result = isMathFunction("max");
      expect(result).toBe(true);
    });

    it("should return true with input min", () => {
      const result = isMathFunction("min");
      expect(result).toBe(true);
    });

    it("should return true with input sqrt", () => {
      const result = isMathFunction("sqrt");
      expect(result).toBe(true);
    });

    it("should return false with input 3", () => {
      const result = isMathFunction("3");
      expect(result).toBe(false);
    });
  });
});

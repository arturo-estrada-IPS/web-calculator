import { evaluateMathExp } from "./calculator";

describe("calculator", () => {
  describe("function definition", () => {
    it("should be defined", () => {
      expect(evaluateMathExp).toBeDefined();
    });
  });

  describe("complete evaluations", () => {
    it("should equal to 0 wuth input: sin(max(2,3)/3*PI)", () => {
      const input = "sin(max(2,3)/3*PI)";
      const expectedOutput = "0";
      const output = evaluateMathExp(input);

      expect(output).toBe(expectedOutput);
    });

    it("should equal to 10.87312731383618 with input: e * 4", () => {
      const input = "e * 4";
      const expectedOutput = "10.87312731383618";
      const output = evaluateMathExp(input);

      expect(output).toBe(expectedOutput);
    });

    it("should equal -1 with input: cos(pi) / (3-2)", () => {
      const input = "cos(pi) / (3 -2)";
      const expectedOutput = "-1";
      const output = evaluateMathExp(input);

      expect(output).toBe(expectedOutput);
    });

    it("should equal 0 with input: sqrt(tan(pi))", () => {
      const input = "sqrt(tan(pi))";
      const expectedOutput = "0";
      const output = evaluateMathExp(input);

      expect(output).toBe(expectedOutput);
    });

    it("should equal 8 with input min(2,3) * 4", () => {
      const input = "min(2,3) * 4";
      const expectedOutput = "8";
      const output = evaluateMathExp(input);

      expect(output).toBe(expectedOutput);
    });
  });

  describe("errors amd invaid input", () => {
    it("should handle invalid input when 3 - 2 -", () => {
      const input = "3 - 3 *";
      try {
        evaluateMathExp(input);
      } catch (e) {
        expect(e).toBeDefined();
        expect((e as any).message).toBe("invalid expression");
      }
    });

    it("should handle mismatched parenthesis when (2-3) * (2+3", () => {
      const input = "(2-3) * 2+3)";
      try {
        evaluateMathExp(input);
      } catch (e) {
        expect(e).toBeDefined();
        expect((e as any).message).toBe("Mismatched Parenthesis");
      }
    });
  });
});

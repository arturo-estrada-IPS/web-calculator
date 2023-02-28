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
  });
});

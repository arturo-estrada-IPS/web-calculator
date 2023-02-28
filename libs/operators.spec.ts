import {
  divide,
  max,
  min,
  multiply,
  pow,
  sqrt,
  subtract,
  sum,
  trig,
} from "./operators";

describe("operators: a set of function to perform the basic mathematical operations", () => {
  describe("basic operations", () => {
    it("should add", () => {
      const a = 8;
      const b = 4;
      const expectedResult = 12;
      const result = sum(a, b);
      expect(result).toBe(expectedResult);
    });

    it("should subtract", () => {
      const a = 8;
      const b = 4;
      const expectedResult = 4;
      const result = subtract(a, b);
      expect(result).toBe(expectedResult);
    });

    it("should multiply", () => {
      const a = 8;
      const b = 4;
      const expectedResult = 32;
      const result = multiply(a, b);
      expect(result).toBe(expectedResult);
    });

    it("should divide", () => {
      const a = 8;
      const b = 4;
      const expectedResult = 2;
      const result = divide(a, b);
      expect(result).toBe(expectedResult);
    });

    it("should raise to a given power", () => {
      const a = 2;
      const b = 3;
      const expectedResult = 8;
      const result = pow(a, b);
      expect(result).toBe(expectedResult);
    });
  });

  describe("trig functions", () => {
    describe("sin", () => {
      it("should execute sin function", () => {
        const input = Math.PI / 2;
        const expectedOutput = 1;
        const output = trig("sin", input);
        expect(output).toBe(expectedOutput);
      });
    });

    describe("cos", () => {
      it("should execute cos function", () => {
        const input = 0;
        const expectedOutput = 1;
        const output = trig("cos", input);
        expect(output).toBe(expectedOutput);
      });
    });

    describe("Name of the group", () => {
      it("should execute tan function", () => {
        const input = Math.PI / 4;
        const expectedOutput = 1;
        const output = Math.round(trig("tan", input));
        expect(output).toBe(expectedOutput);
      });
    });
  });

  describe("other functions", () => {
    describe("sqrt", () => {
      it("should calculate the square root of a given number", () => {
        const input = 4;
        const expectedOutput = 2;
        const output = sqrt(input);
        expect(output).toBe(expectedOutput);
      });
    });

    describe("min and max", () => {
      it("should get max value of two given numbers", () => {
        const a = 2;
        const b = 3;
        const output = max(a, b);
        expect(output).toBe(b);
      });

      it("should get min value of two given numbers", () => {
        const a = 2;
        const b = 3;
        const output = min(a, b);
        expect(output).toBe(a);
      });
    });
  });
});

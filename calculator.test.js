// Import operator functions from calculator.js
const { add, subtract, multiply, divide } = require("./calculator");

describe("Testing Calculator Operators", () => {
  // Add
  describe("Add Operator", () => {
    test("adds 10 and 5 to equal 15", () => {
      expect(add(10, 5)).toBe(15);
    });

    test("adds -10 and 5 to equal -5", () => {
      expect(add(-10, 5)).toBe(-5);
    });

    test("adds 0 and 5 to equal 5", () => {
      expect(add(0, 5)).toBe(5);
    });

    test("adds -5 and -5 to equal -10", () => {
      expect(add(-5, -5)).toBe(-10);
    });
  });

  // Subtract
  describe("Subtract Operator", () => {
    test("subtracts 5 from 10 to equal 5", () => {
      expect(subtract(10, 5)).toBe(5);
    });

    test("subtracts 0 from 10 to equal 10", () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test("subtracts 5 from 0 to equal -5", () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test("subtracts -5 from -10 to equal -5", () => {
      expect(subtract(-10, -5)).toBe(-5);
    });
  });

  // Multiply
  describe("Multiply Operator", () => {
    test("multiplies 10 by 5 to equal 50", () => {
      expect(multiply(10, 5)).toBe(50);
    });

    test("multiplies 10 by 0 to equal 0", () => {
      expect(multiply(10, 0)).toBe(0);
    });

    test("multiplies -10 by 5 to equal -50", () => {
      expect(multiply(-10, 5)).toBe(-50);
    });

    test("multiplies -10 by -5 to equal 50", () => {
      expect(multiply(-10, -5)).toBe(50);
    });
  });

  // Divide
  describe("Divide Operator", () => {
    test("divides 10 by 5 to equal 2", () => {
      expect(divide(10, 5)).toBe(2);
    });

    test("divides 10 by 0 to throw an error", () => {
      expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });

    test("divides 10 by -2 to equal -5", () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test("divides 5 by 2 to equal 2.5", () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test("divides -10 by -2 to equal 5", () => {
      expect(divide(-10, -2)).toBe(5);
    });
  });
});

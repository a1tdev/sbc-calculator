"use strict";

// Operator functions

function add(number1, number2) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 + number2;
  } else {
    throw new Error("Invalid input, please provide valid numbers");
  }
}

function subtract(number1, number2) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 - number2;
  } else {
    throw new Error("Invalid input, please provide valid numbers");
  }
}

function multiply(number1, number2) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 * number2;
  } else {
    throw new Error("Invalid input, please provide valid numbers");
  }
}

function divide(number1, number2) {
  if (number2 === 0) {
    throw new Error("Cannot divide by zero");
  } else if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 / number2;
  } else {
    throw new Error("Invalid input, please provide valid numbers");
  }
}

// Export the functions as a module
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};

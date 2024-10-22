"use strict";

// Import the calculator module
const calculator = require("./calculator.js");

// Call operator functions + pass values
let resultAdd = calculator.add(10, 5);
console.log("Addition result:", resultAdd); // Output: 15

let resultSubtract = calculator.subtract(10, 5);
console.log("Subtraction result:", resultSubtract); // Output: 5

let resultMultiply = calculator.multiply(10, 5);
console.log("Multiplication result:", resultMultiply); // Output: 50

let resultDivide = calculator.divide(10, 5);
console.log("Division result:", resultDivide); // Output: 2

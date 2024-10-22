"use strict";

// Simple Calculator Assignment

let calculate = function (number1, number2, operation) {
  //2) the if statement first checks if the numbers are valid.
  if (typeof number1 === "number" && typeof number2 === "number") {
    //4) if valid (true) the switch statement then checks if the operation parameter is equal to the cases
    switch (operation) {
      case "add":
      case "+":
        return number1 + number2; //5) when the case matches the operation it completes the sum and returns the answer

      case "minus":
      case "-":
        return number1 - number2;

      case "times":
      case "*":
        return number1 * number2;

      case "divide":
      case "/":
        return number1 / number2;

      default:
        console.log("Not a valid operation"); // 6) Not a valid operation logs this message
    }
  } else console.log("Not a valid number"); // 3) Not a valid number (false) logs this message
};

// 1) The calculate function is called which stores the three arguments as parameters inside the function
let result = calculate(5, 5, "add"); // 7) the answer is then stored inside the result variable

console.log(result); // 8) finally the variable is logged to the console.

//////////////////////////////////////////////////////////////////////////////////////

// PERSONAL CHALLENGE - BUILT IN CALCULATOR

let screen = document.getElementById("screen"); // Stores screen id in screen variable
let btnContainer = document.querySelectorAll("#btnContainer button"); // Stores all buttons in btnContainer
let screenMemory = document.getElementById("screenMemory"); // Stores screenMemory id in screenMemory variable

let resultDisplayed = false; // Flag to track if the result has been displayed. This is so I can clear the screen at the end of the equation.

btnContainer.forEach(function (button) {
  // forEach loops through each individual button
  button.addEventListener("click", function (event) {
    // Each button is assigned an event handler (click)
    // Clear the screen
    if (event.target.textContent === "AC") {
      // If button content is equal to AC run this code
      screen.textContent = ""; // Clear main screen
      screenMemory.textContent = ""; // Clear memory screen
    }
    // Delete last value
    else if (event.target.textContent === "D") {
      // If button content is equal to D run this code
      screen.textContent = screen.textContent.slice(0, -1); // Used .slice to select all characters on the screen except for the last. This is then displayed on the screen - ultimately works as a delete button.
    }

    // Factorial function (Google Assisted)
    else if (event.target.textContent === "x!") {
      // If button content is equal to x! run this code
      let num = parseInt(screen.textContent); // Get the current number from the screen

      // Define the factorialize function
      function factorialize(num) {
        if (num === 0 || num === 1) return 1; // If number is 0 or 1 return 1
        for (var i = num - 1; i >= 1; i--) {
          // Loops through starting at num -1 and goes down each time by -1 until it is equal to 1 e.g. i = 4. loop will run 4, 3, 2, 1
          num *= i; // Each loop the num is multiplied by i and updated in the variable. For example, 4*3, 12*2, 24*1 returns 24
        }
        return num;
      }

      if (!Number.isNaN(num) && num >= 0) {
        // Check if the input is a valid number
        screen.textContent = factorialize(num); // Call function to get result and display it on the screen
      } else {
        screen.textContent = "Error"; // Invalid input displays an error
      }

      // Equals logic
    } else if (event.target.textContent === "=") {
      // If button content is equal to = run this code
      screenMemory.textContent = screen.textContent; // Save the current sum to screenMemory

      try {
        screen.textContent = eval(screen.textContent); // Display the result on screen
        resultDisplayed = true; // Set the flag to true when result is shown
      } catch (error) {
        screen.textContent = "Error"; // If there's an error, display "Error"
        screenMemory.textContent = ""; // Clear the memory screen
        resultDisplayed = true; // Reset the flag in case of error
      }
    }
    // If result is displayed (true), clear the screen when the user presses a new button
    else if (resultDisplayed) {
      screen.textContent = ""; // Clear the screen
      screenMemory.textContent = ""; // Clear the memory screen
      resultDisplayed = false; // Reset the flag
    }
    // If nothing is true before then this defaults to show numbers/operators on the main screen
    else {
      console.log(event.target.textContent);
      screen.textContent = screen.textContent + event.target.textContent;
    }
  });
});

// Light / Dark Theme
const themeToggleDark = document.querySelector("#theme-toggle-dark");
const themeToggleLight = document.querySelector("#theme-toggle-light");

const themeScreen = document.querySelector(".calc-screen");

themeToggleDark.addEventListener("click", function () {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");

  themeScreen.classList.remove("light-screen");
  themeScreen.classList.add("dark-screen");

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.classList.remove("btn-light");
    btn.classList.add("btn-dark");
  });
});
themeToggleLight.addEventListener("click", function () {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");

  themeScreen.classList.add("light-screen");
  themeScreen.classList.remove("dark-screen");

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.classList.remove("btn-dark");
    btn.classList.add("btn-light");
  });
});

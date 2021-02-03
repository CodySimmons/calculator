const calcButtons = document.querySelectorAll(".calculator-button");
const display = document.querySelector("#input-numbers");
var displayNumber = "";
var displayHistory = "";

function inputRecorder(input) {
  button = this.id;
  switch (button) {
    case "one-button":
      displayNumber = displayNumber + "1";
      break;
    case "two-button":
      displayNumber = displayNumber + "2";
      break;
    case "three-button":
      displayNumber = displayNumber + "3";
      break;
    case "four-button":
      displayNumber = displayNumber + "4";
      break;
    case "five-button":
      displayNumber = displayNumber + "5";
      break;
    case "six-button":
      displayNumber = displayNumber + "6";
      break;
    case "seven-button":
      displayNumber = displayNumber + "7";
      break;
    case "eight-button":
      displayNumber = displayNumber + "8";
      break;
    case "nine-button":
      displayNumber = displayNumber + "9";
      break;
    case "divide-button":
      displayNumber = displayNumber + "/";
      break;
    case "multiply-button":
      displayNumber = displayNumber + "X";
      break;
    case "minus-button":
      displayNumber = displayNumber + "-";
      break;
    case "decimal-button":
      displayNumber = displayNumber + ".";
      break;
    // case "negative-button":
    //   displayNumber = displayNumber + '/';
    //   break;
    case "add-button":
      displayNumber = displayNumber + "+";
      break;
    case "clear-button":
      displayNumber = "";
      break;
    case "all-clear-button":
      displayNumber = "";
      break;
    // case "equal-button":
    //   displayNumber = "";
    //   break;
    default:
      break;
  }
  console.log(displayNumber);
  display.textContent = displayNumber;
}

function add(array) {
  return array[0] + array[1];
}

function subtract(array) {
  return array[0] - array[1];
}
function multiply(array) {
  return array[0] * array[1];
}

function divide(array) {
  if (array[1] === 0) {
    return "Error - Cannot divide by 0";
  } else {
    return array[0] / array[1];
  }
}

function operate(mathArray) {
  switch (mathArray[2]) {
    case "plus":
      console.log(add(mathArray));
      break;
    case "minus":
      console.log(subtract(mathArray));
      break;
    case "multiply":
      console.log(multiply(mathArray));
      break;
    case "divide":
      console.log(divide(mathArray));
      break;
    // case "exponent":
    //   break;
  }
}

calcButtons.forEach((btn) => btn.addEventListener("click", inputRecorder));

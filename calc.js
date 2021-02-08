const calcButtons = document.querySelectorAll(".calculator-button");
const display = document.querySelector("#input-numbers");
const inputHistoryDisplay = document.querySelector("#input-history");
var inputNumber = "";
var inputHistory = "";
var currentOperation = {
  firstNumber: "",
  secondNumber: "",
  operator: "",
};

function inputRecorder(input) {
  button = this.id;
  if (this.classList.contains("operator-button")) {
    if (button === "negative-button") {
      if (
        inputNumber === 0 ||
        inputNumber === "" ||
        (inputNumber.toString().length >= 16 && inputNumber > 0)
      ) {
        window.alert("Unable to perform action!");
      }
      inputNumber = inputNumber * -1;
      display.textContent = inputNumber;
    } else if (button === "decimal-button") {
    } else if (button === "clear-button") {
    } else if (button === "all-clear-button") {
    } else {
      currentOperation.secondNumber = parseFloat(inputNumber);
      if (button !== "equal-button") {
        currentOperation.operator = this.id;

        inputHistory =
          inputHistory + currentOperation.secondNumber + this.textContent;
        inputHistoryDisplay.textContent = inputHistory;
      }

      currentOperation.firstNumber = operateExecution();
      console.log(currentOperation.firstNumber);
      inputNumber = "";
      display.textContent = currentOperation.firstNumber;
    }
  } else {
    if (inputNumber.toString().length >= 16) {
      window.alert("Too many numbers! Use an operator or clear the screen!");
    } else {
      inputNumber = inputNumber + button;
    }
    display.textContent = inputNumber;
  }
  console.log(inputNumber);
}

function operateExecution() {
  if (currentOperation.firstNumber !== "") {
    switch (currentOperation.operator) {
      case "add-button":
        return add();
        break;
      case "minus-button":
        return subtract();
        break;
      case "multiply-button":
        return multiply();
        break;
      case "divide-button":
        return divide();
        break;
    }
  } else {
    console.log("hi!");
    currentOperation.operator = this.id;
  }
  return currentOperation.secondNumber;
}

function add() {
  return (
    parseFloat(currentOperation.firstNumber) +
    parseFloat(currentOperation.secondNumber)
  );
}

function subtract() {
  return currentOperation.firstNumber - currentOperation.secondNumber;
}
function multiply() {
  return currentOperation.firstNumber * currentOperation.secondNumber;
}

function divide() {
  if (currentOperation.secondNumber === 0) {
    alert("Error - Cannot divide by 0");
  } else {
    return currentOperation.firstNumber / currentOperation.secondNumber;
  }
}

//button event listener
calcButtons.forEach((btn) => btn.addEventListener("click", inputRecorder));

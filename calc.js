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

operate([1, 2, "plus"]);

operate([1, 2, "minus"]);

operate([5, 5, "multiply"]);

operate([5.0, 3, "divide"]);
//operate([25, 0, "divide"]);

"use strict";

let number1 = prompt("introduce primer numero");
let number2 = prompt("introduce segundo numero ");
let operation = prompt("introduce operacion");

if (operation === "+") {
  console.log(number1 + number2);
} else if (operation === "-") {
  console.log(number1 - number2);
} else if (operation === "*") {
  console.log(number1 * number2);
} else if (operation === "**") {
  console.log(number1 ** number2);
} else if (operation === "/") {
  if (number2 != 0) {
    console.log(number1 / number2);
  } else {
    console.log("error, incorrect operation");
  }
}

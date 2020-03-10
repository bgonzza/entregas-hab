"use string";

let number1 = prompt("introduce un numero");
let number2 = prompt("introduce un segundo numero");
let operation = prompt("introduce una  operacion");

switch (operation) {
  case "+":
    console.log(number1 + number2);
    break;
  case "-":
    console.log(number1 - number2);
    break;
  case "*":
    console.log(number1 * number2);
    break;
  case "**":
    console.log(number1 ** number2);
    break;
  case "/":
  case number2 !== 0:
    console.log(number1 / number2);
    break;
  case number2 === 0:
    console.log("No dividas entre 0 que da infinito");
    break;
  default:
    console.log("Error");
}

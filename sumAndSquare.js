const prompt = require("prompt-sync")();

var num1 = parseInt(prompt("Enter your first number:"));
var num2 = parseInt(prompt("Enter a second number:"));

function sumAndSquare(num1, num2) {
  const SUM = (+num1) + (+num2);
  let result = SUM * SUM;
  return result;
}

let result = sumAndSquare(num1, num2);
console.log(result); // Output

console.log("This message is loggeed from main.js");

debugger;
// variable declaration and initialisation
let userName = "Adrienne";

//variable declaration
let otheruserName;

let userAge = 34.5;
let secondUserAge = "41";

let firstNumber = prompt("Input the first number : ");
firstNumber = Number(firstNumber);
let secondNumber = prompt("Input the second number : ");
secondNumber = Number(secondNumber);

let sum = firstNumber + secondNumber;

console.log(firstNumber, typeof firstNumber);
console.log(secondNumber, typeof secondNumber);
console.log(firstNumber + secondNumber);

//alert("Resultatul este: " + sum)
alert(`Sum is ${sum}`);
alert(`Difference is ${firstNumber - secondNumber}`);


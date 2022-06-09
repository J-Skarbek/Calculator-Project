let inputOne;
let inputTwo;
let inputThree;

const buttons = document.querySelectorAll('.buttons');


let additionResult = add();
let subtractionResult = subtract();
let mulitplicationResult = multiply();
let divisionResult = divide();

function add(inputOne, inputTwo) {
    let result = inputOne + inputTwo;
    return Number(result.toFixed(3));
}

function subtract(inputOne, inputTwo) {
    let result = inputOne - inputTwo;
    return Number(result.toFixed(3));
}

function multiply(inputOne, inputTwo) {
    let result = inputOne * inputTwo;
    return Number(result.toFixed(3));
}

function divide(inputOne, inputTwo) {
    let result = inputOne / inputTwo;
    return Number(result.toFixed(3));
}






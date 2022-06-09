let inputOne;
let inputTwo;
let inputThree;

const equalsButton = document.getElementById('operate');
const clearButton = document.getElementById('ON-C');
const decimalButton = document.getElementById('decimal');
const numberButtons = document.querySelectorAll('.buttons');
const functionButtons = document.querySelectorAll('.funct-button');

const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');


window.addEventListener('keydown', handleKeyboardInput);
equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);

decimalButton.addEventListener('click', appendDecimal);


const add = (inputOne, inputTwo) => {
    let result = inputOne + inputTwo;
    return Number(result.toFixed(3));
}

const subtract = (inputOne, inputTwo) => {
    let result = inputOne - inputTwo;
    return Number(result.toFixed(3));
}

const multiply = (inputOne, inputTwo) => {
    let result = inputOne * inputTwo;
    return Number(result.toFixed(3));
}

const divide = (inputOne, inputTwo) => {
    let result = inputOne / inputTwo;
    return Number(result.toFixed(3));
}

function handleKeyboardInput(e) {

}






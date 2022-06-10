let inputOne;
let inputTwo;


const equalsButton = document.getElementById('operate');
const clearButton = document.getElementById('ON-C');
const decimalButton = document.getElementById('decimal');
const numberButtons = document.querySelectorAll('.buttons');
const functionButtons = document.querySelectorAll('.funct-button');

const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');

// window.addEventListener('keydown', function(e) {
//     console.log(e);
// });


window.addEventListener('keydown', handleKeyInput);

// function appendNumber(number) {
//     if (currentOperationScreen.textContent === '0') {
//         currentOperationScreen.textContent += number;
//     }
// }

function appendNumber(number) {
    currentOperationScreen.textContent += number;
    
}

function handleKeyInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        appendNumber(e.key);
        console.log(e.key);
        console.log(e);
    }
}

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
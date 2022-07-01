let inputOne;
let inputTwo;
let currentOperation = null;
let shouldResetScreen = false;


const equalsButton = document.getElementById('operate');
const clearButton = document.getElementById('ON-C');
const deleteButton = document.getElementById('deleteBtn');
const decimalButton = document.getElementById('decimal');
const numberButtons = document.querySelectorAll('.buttons');
const functionButtons = document.querySelectorAll('.funct-button');

const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');

const testNumber9 = document.getElementById('btn-9');
const testNumber5 = document.getElementById('btn-5');

// testNumber9.addEventListener('click', () => appendNumber(e.textContent));
// testNumber5.addEventListener('click', () => appendNumber(e.textContent));


// window.addEventListener('keydown', function(e) {
//     console.log(e);
// });


window.addEventListener('keydown', handleKeyInput);

// function appendNumber(number) {
//     if (currentOperationScreen.textContent === '0') {
//         currentOperationScreen.textContent += number;
//     }
// }



numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

functionButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
);

// function limitInput(string = '' , limit = 9) {
//     return string.substring(0, limit)
// }

function appendNumber(number) {
    currentOperationScreen.textContent += number; 
}

function setOperation(operator) {
    if (currentOperation !== null) {
        evaluate();
        firstOperand = currentOperationScreen.textContent;
        currentOperation = operator;
        lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
        // shouldResetScreen = true;
    }
}

function evaluate() {
    if (currentOperation === null) {
        return;
    }
    if (currentOperation === '' && currentOperationScreen.textContent === '0') {
        alert("You can't divide by 0!");
        return;
    }
    secondOperand = currentOperationScreen.textContent;
    
}

function handleKeyInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        appendNumber(e.key);
        console.log(e.key);
        console.log(e);
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        setOperation(convertOperator(e.key));
    }
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') {
        return '÷';
    }
    if (keyboardOperator === '*') {
        return '*';
    }
    if (keyboardOperator === '-') {
        return '-';
    }
    if (keyboardOperator === '+') {
        return '+';
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
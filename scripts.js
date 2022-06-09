let inputOne;
let inputTwo;
let inputThree;
let currentOperation = null;
let shouldResetScreen = false;

const equalsButton = document.getElementById('operate');
const clearButton = document.getElementById('ON-C');
const decimalButton = document.getElementById('decimal');
const numberButtons = document.querySelectorAll('.buttons');
const functionButtons = document.querySelectorAll('.funct-button');

const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');


window.addEventListener('keydown', handleKeyboardInput);
// equalsButton.addEventListener('click', evaluate);
// clearButton.addEventListener('click', clear);
// decimalButton.addEventListener('click', appendDecimal);

numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

functionButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
);


function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen) {
        resetScreen();
    };
    currentOperationScreen.textContent += number;
}

function resetScreen() {
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
}

function setOperator(operator) {
    if (currentOperation !== null) { evaluate()
        firstOperand = currentOperationScreen.textContent;
        currentOperation = operator;
        lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
        shouldResetScreen = true;
    };
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

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === '.') appendDecimal();
    if (e.key === '=' || e.key === 'Enter') evaluate();
    // if (e.key === 'Backspace') deleteNumber();
    // if (e.key === 'Escape') clear();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        setOperation(convertOperator(e.key))
    };
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }







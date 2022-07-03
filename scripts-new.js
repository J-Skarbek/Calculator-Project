let inputOne;
let inputTwo;
let inputThree;
let currentOperation = null;
let shouldResetScreen = false;

const deleteButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('operate');
const onClearButton = document.getElementById('on-clear');
const decimalButton = document.getElementById('decimal');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

const numberButtons = document.querySelectorAll('.buttons');
const functionButtons = document.querySelectorAll('.funct-button');

const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');


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
let inputValue;
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
const inputField = document.getElementById('display');
const operationButtons = Array.from(document.querySelectorAll('.operator'));
const numberButtons = Array.from(document.querySelectorAll('.number'));

numberButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(e.target.value);
    inputValue = e.target.value;
    inputOne = inputField.textContent += `${inputValue}`;
  });  
  button.addEventListener('keydown', (e) => {
    console.log(e.key);
    inputValue = e.key;
    inputOne = inputField.textContent += `${inputValue}`;
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(e.target.value);
  });
  button.addEventListener('keydown', (e) => {
    console.log(e.key);
  });
});

clearButton.addEventListener('click', () => {
  inputField.textContent = '';
  inputOne = 0;
});

onClearButton.addEventListener('click', () => {
  inputField.textContent = '';
  inputOne = 0;
});

const deleteKey = () => {
  if (inputOne == undefined || inputOne == '') {
    alert("error");
    return;
  } else if (inputOne) {
    let deleteValue = inputOne.slice(0, inputOne.length - 1);
    console.log(typeof deleteValue);
    console.log(deleteValue);
    inputOne = deleteValue;
    // inputOne.textContent = inputOne.slice(-1);
    return inputOne;
  } else {
    deleteKey();
  };
};

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
  // if (e.key === '.') appendDecimal();
  // if (e.key === '=' || e.key === 'Enter') evaluate();
  // if (e.key === 'Backspace') deleteNumber();
  // if (e.key === 'Escape') clear();
  // if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
  //     setOperation(convertOperator(e.key))
  // };
}

function appendNumber(e) {
  if (e.key >= 0 && e.key <= 9) {
    inputOne = inputField.textContent += `${e.key}`;
    console.log(e);
    return inputOne;
  }
}

// function convertOperator(keyboardOperator) {
//   if (keyboardOperator === '/') return '÷';
//   if (keyboardOperator === '*') return '×';
//   if (keyboardOperator === '-') return '−';
//   if (keyboardOperator === '+') return '+';
// }

deleteButton.addEventListener('click', deleteKey);
window.addEventListener('keydown', appendNumber);

let inputValue;
let inputOne;
let inputTwo;
let result;
let currentOperation;

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
const priorInput = document.getElementById('prior-input');
const operationButtons = Array.from(document.querySelectorAll('.operator'));
const operatorDisplay = document.getElementById('operator-symbol');
const returnButton = document.getElementById('operate');
const numberButtons = Array.from(document.querySelectorAll('.number'));

numberButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.value === '.') {
      if (inputField.textContent.includes('.') === false) {
        inputField.textContent += `${e.target.value}`
        button.blur()
      }
    } else {
      inputValue = e.target.value;
      inputOne = inputField.textContent += `${inputValue}`;
      button.blur()
    }
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', handleClickOperators)
})

clearButton.addEventListener('click', clearAllInputs)
onClearButton.addEventListener('click', clearAllInputs)
deleteButton.addEventListener('click', deleteKey)
window.addEventListener('keydown', keyBoardInput)

function keyBoardInput(e) {
  if (e.key >= 0 && e.key <= 9) {
    inputOne = inputField.textContent += `${e.key}`;
  }
  if (e.key === '/' || e.key === '*' || e.key === '+' || e.key === '-') {
    if (operatorDisplay.textContent == '') {
      operatorDisplay.textContent += `${e.key}`;
      currentOperation = e.key;
    } else {
      alert(`You can only use one operator at a time.`)
    }
    nextInput()
  }
  if (e.key === '.' && inputField.textContent.includes('.') === false) {
    inputField.textContent += `${e.key}`
  }
  if (e.key === 'Enter') {
    validityCheck()
  }
  if (e.key === 'Delete' || e.key === 'Backspace') {
    deleteKey()
  }
  if (e.key === 'Clear') {
    clearAllInputs()
  }
}

function handleClickOperators(e) {
  if (e.target.value === '/' || e.target.value === '*' || e.target.value === '+' || e.target.value === '-') {
    if (operatorDisplay.textContent == '') {
      operatorDisplay.textContent += `${e.target.value}`;
      currentOperation = e.target.value;
    } else {
      alert("You can only use one operator at a time.")
    }
    nextInput()

  }
}

function clearAllInputs() {
  inputField.textContent = '';
  priorInput.textContent = '';
  operatorDisplay.textContent = '';
  inputOne = 0;
  inputTwo = 0;
  currentOperation = null;
  clearButton.blur()
  onClearButton.blur()
}

function validityCheck() {
  if (currentOperation === '/' && inputOne === '0') {
    alert("Sorry, you can't divide by zero!")
    clearAllInputs()
  } else if (currentOperation === '+') {
    result = inputField.textContent = add(inputOne, inputTwo);
  } else if (currentOperation === '-') {
    result = inputField.textContent = subtract(inputOne, inputTwo);
  } else if (currentOperation === '*') {
    result = inputField.textContent = multiply(inputOne, inputTwo);
  } else if (currentOperation === '/') {
    result = inputField.textContent = divide(inputOne, inputTwo);
  }
  priorInput.textContent = ''
  operatorDisplay.textContent = ''
}

function nextInput() {
  priorInput.textContent = inputField.textContent;
  inputTwo = priorInput.textContent;
  inputField.textContent = '';
  inputOne = '';
}

function deleteKey() {
  if (inputOne == undefined || inputOne == '') {
    alert("error");
  } else if (inputOne) {
    let deleteValue = inputOne.slice(0, inputOne.length - 1);
    inputOne = deleteValue;
    inputField.textContent = `${deleteValue}`;
    deleteButton.blur()
  } else {
    deleteKey()
  }
}

const add = (inputOne, inputTwo) => {
  let result = Number(inputOne) + Number(inputTwo);
  return Number(result.toFixed(3));
}

const subtract = (inputOne, inputTwo) => {
  let result = Number(inputTwo) - Number(inputOne);
  return Number(result.toFixed(3));
}

const multiply = (inputOne, inputTwo) => {
  let result = Number(inputOne) * Number(inputTwo);
  return Number(result.toFixed(3));
}

const divide = (inputOne, inputTwo) => {
  let result = Number(inputTwo) / Number(inputOne);
  return Number(result.toFixed(3));
}
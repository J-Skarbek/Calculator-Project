let inputValue;
let inputOne;
let inputTwo;
let inputThree;
let result;
let currentOperation;
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
const priorInput = document.getElementById('prior-input');
const operationButtons = Array.from(document.querySelectorAll('.operator'));
const operatorDisplay = document.getElementById('operator-symbol');
const returnButton = document.getElementById('operate');
const numberButtons = Array.from(document.querySelectorAll('.number'));

numberButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.value === '.') {
        console.log('No deicmal support yet.')
    } else {
      console.log(e.target.value);
      inputValue = e.target.value;
      inputOne = inputField.textContent += `${inputValue}`;
    }
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', handleClickOperators)
})

clearButton.addEventListener('click', () => {
  inputField.textContent = '';
  priorInput.textContent = '';
  operatorDisplay.textContent = '';
  inputOne = 0;
  inputTwo = 0;
  currentOperation = null;
})

onClearButton.addEventListener('click', () => {
  inputField.textContent = '';
  priorInput.textContent = '';
  operatorDisplay.textContent = '';
  inputOne = 0;
  inputTwo = 0;
  currentOperation = null;
})

returnButton.addEventListener('click', validityCheck)
returnButton.addEventListener('keydown', validityCheck)

function validityCheck() {
  if (currentOperation === '+') {
    result = inputField.textContent = add(inputOne, inputTwo);
  } else if (currentOperation === '-') {
    result = inputField.textContent = subtract(inputOne, inputTwo);
  } else if (currentOperation === 'x') {
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
  console.log(inputOne, "inputOne");
  console.log(inputTwo, "inputTwo");
}

const deleteKey = () => {
  if (inputOne == undefined || inputOne == '') {
    alert("error");
    return;
  } else if (inputOne) {
    let deleteValue = inputOne.slice(0, inputOne.length - 1);
    console.log(typeof deleteValue);
    console.log(deleteValue);
    inputOne = deleteValue;
    inputField.textContent = `${deleteValue}`;
    return inputOne;
  } else {
    deleteKey();
  };
};

const add = (inputOne, inputTwo) => {
  let result = Number(inputOne) + Number(inputTwo);
  return result;
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

function keyBoardInput(e) {
  if (e.key >= 0 && e.key <= 9) {
    inputOne = inputField.textContent += `${e.key}`;
    console.log(e);
  };
  if (e.key === '/' || e.key === '*' || e.key === '+' || e.key === '-') {
    if (operatorDisplay.textContent == '') {
      operatorDisplay.textContent += `${e.key}`;
      currentOperation = e.key;
    } else {
      alert(`You can only use one operator at a time.`)
    }
    nextInput()
    console.log(e);
  };
  if (e.key === '.') {
    console.log(`No deicmal support yet.`)
  };
  return inputOne;
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
    console.log(e);
  }
}

deleteButton.addEventListener('click', deleteKey);
window.addEventListener('keydown', keyBoardInput);

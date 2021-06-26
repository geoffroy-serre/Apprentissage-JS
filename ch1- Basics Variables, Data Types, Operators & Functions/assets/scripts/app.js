const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let previousResult = 0;

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', substraction);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

function getUserInput() {
  return parseInt(userInput.value);
}

function resultTextAndOutput(operator, result, inputNumber) {
  const logEntry = {
    previous: previousResult,
    operator: operator,
    inputNumber: inputNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log('CURRENT OPERATION :' + logEntries[logEntries.length - 1]);
  console.log('TOTAL OPERATIONS : ' + logEntries);
  const descriptionCalc = `${result} ${operator} ${inputNumber}`;
  outputResult(currentResult, logEntries);
}

function addition() {
  previousResult = currentResult;
  currentResult += getUserInput();
  resultTextAndOutput('+', currentResult, getUserInput());
}

function substraction() {
  previousResult = currentResult;
  currentResult -= getUserInput();
  resultTextAndOutput('-', currentResult, getUserInput());
}

function multiply() {
  previousResult = currentResult;
  currentResult *= getUserInput();
  resultTextAndOutput('*', currentResult, getUserInput());
}
function divide() {
  previousResult = currentResult;
  currentResult /= getUserInput();
  resultTextAndOutput('/', currentResult, getUserInput());
}

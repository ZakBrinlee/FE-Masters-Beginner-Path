let inputValue = '0';
let total = 0;
let operator;

function mathFunctions(buffer) {
  if (operator === "+") {
    total += buffer;
  } else if (operator === "−") {
    total -= buffer;
  } else if (operator === "×") {
    total *= buffer;
  } else {
    total /= buffer;
  }
}

function setReadout() {
  document.querySelector('.readout').innerHTML = inputValue;
}

function handleMath(value) {
  if (inputValue === "0") {
    // do nothing
    return;
  }

  const buffer = parseInt(inputValue);
  if (total === 0) {
    total = buffer;
  } else {
    mathFunctions(buffer);
  }

  operator = value;
  inputValue = "0";
}

function doOperations(value) {
  switch (value) {
    case "=":
      if (operator === null) {
        // need two numbers to do math
        return;
      }
      mathFunctions(parseInt(inputValue));
      operator = null;
      inputValue = +total;
      total = 0;
      break;
    case "C":
      inputValue = "0";
      total = 0;
      break;
    case "←":
      if (inputValue.length === 1) {
        inputValue = "0";
      } else {
        inputValue = inputValue.substring(0, inputValue.length - 1);
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      handleMath(value);
      break;
  }
}

document.querySelector('.container').addEventListener('click', function (event) {
  const value = event.target.innerText;

  if (isNaN(parseInt(value))) {
    doOperations(value);
  } else {
    if (inputValue === '0') {
      inputValue = value;
    } else {
      inputValue += value;
    }
  }

  setReadout();
});
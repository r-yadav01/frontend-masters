let operand1 = '';
let operand2 = '';
let operator = null;

document.addEventListener('DOMContentLoaded', main);

function main() {
  const numKeys = document.querySelectorAll('.numeric');
  for (let i = 0; i < numKeys.length; i++) {
    numKeys[i].addEventListener('click', numberClickHandler);
  }

  const operatorKeys = document.querySelectorAll('.operator');
  for (let i = 0; i < operatorKeys.length; i++) {
    operatorKeys[i].addEventListener('click', operatorClickHandler);
  }

  const clearKey = document.querySelector('.clear');
  clearKey.addEventListener('click', () => {
    operand1 = '';
    operand2 = '';
    operator = null;
    displayOnScreen('');
  })

  const backspaceKey = document.querySelector('.backspace');
  backspaceKey.addEventListener('click', () => {
    if (operator === null) {
      operand1 = operand1.slice(0,-1);
      displayOnScreen(operand1);
    }
    else {
      operand2 = operand2.slice(0,-1);
      displayOnScreen(operand2);
    }
  })

  const equalsKey = document.querySelector('.equalsKey');
  equalsKey.addEventListener('click', () => {
    const answer = calculate(operand1, operand2, operator);
    clearKey.click();
    displayOnScreen(answer);
  })
}

function numberClickHandler(eventt) {
  const btnValue = eventt.target.innerText;
  if (operator === null) {
    operand1 += btnValue;
    displayOnScreen(operand1);
  }
  else {
    operand2 += btnValue;
    displayOnScreen(operand2);
  }
}

function operatorClickHandler(eventt) {
  const btnValue = eventt.target.innerText;
  if (operator === null) {
    operator = btnValue;
  }
  else {
    operand1 = calculate(operand1, operand2, operator);
    operator = btnValue;
    operand2 = '';
    displayOnScreen(operand1);
  }
}

function calculate(num1, num2, operation) {
  num1 = Number(num1);
  num2 = Number(num2);
  let answer;

  if (isNaN(num1) || isNaN(num2)) {
    answer = 'invalid input';
  }
  else {
    if (operation === '/') {
      if (num2 === 0)
        answer = "PLZ DON'T";
      else
        answer = (num1 / num2);
    }
    else if (operation === '*')
      answer = (num1 * num2);
    else if (operation === '-')
      answer = (num1 - num2);
    else if (operation === '+')
      answer = (num1 + num2);
    else
      answer = 'invalid operator';

    return answer;
  }
}

function displayOnScreen(numberr) {
  const display = document.querySelector('.calc-screen');
  display.innerText = numberr;
}


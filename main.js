function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;
  
    try {
      const result = evalExpression(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  function evalExpression(expression) {
    // Using regular expression to split the expression and handle spaces
    const tokens = expression.match(/\d+|\+|\-|\*|\//g) || [];
    const numbers = [];
    const operators = [];
  
    function applyOperator(operator) {
      const b = numbers.pop();
      const a = numbers.pop();
      switch (operator) {
        case '+':
          numbers.push(a + b);
          break;
        case '-':
          numbers.push(a - b);
          break;
        case '*':
          numbers.push(a * b);
          break;
        case '/':
          numbers.push(a / b);
          break;
      }
    }
  
    tokens.forEach(token => {
      if (!isNaN(token)) {
        numbers.push(parseFloat(token));
      } else if (token === '+' || token === '-') {
        while (operators.length > 0 && (operators[operators.length - 1] === '+' || operators[operators.length - 1] === '-')) {
          applyOperator(operators.pop());
        }
        operators.push(token);
      } else if (token === '*' || token === '/') {
        while (operators.length > 0 && (operators[operators.length - 1] === '*' || operators[operators.length - 1] === '/')) {
          applyOperator(operators.pop());
        }
        operators.push(token);
      }
    });
  
    while (operators.length > 0) {
      applyOperator(operators.pop());
    }
  
    return numbers[0];
  }
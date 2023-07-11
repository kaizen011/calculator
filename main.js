function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}
function divisble(a,b){
    return a % b;
}

let a = '';
let b = '';
let op = '';

function calculate(a, b, op){
    if(op === '+'){
        return add(a,b);
    } 
    else if(op === '-'){
        return subtract(a,b);
    }
    else if(op === '×' || op === 'x' || op === '*'){
        return multiply(a,b);
    }
    else if(op === '÷' || op === '/'){
        return subtract(a,b);
    }
    else if(op === '%'){
        return divide(a,b);
    }
}

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
  });
});
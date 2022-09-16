function add (a,b) {
    return a + b;
};

function substract (a,b){
    return (a - b);
};

function multiply (a,b){
    return (a * b);
};

function divide (a,b){
    return (a / b);
};

function operate(a,operator,b){
    if (operator == '+'){
        return add(a,b);
    } else if (operator == '-'){
        return substract(a,b);
    } else if (operator == '*'){
        return multiply(a,b);
    } else if (operator == '/'){
        return divide(a,b);
    } else {
        return null;
    }
};

let displayValue = document.querySelector('.display');


let buttonOne = document.querySelector('.one');
buttonOne.addEventListener('click', () => {
    displayValue.textContent +=  '1';
});

let buttonTwo = document.querySelector('.two');
buttonTwo.addEventListener('click', () => {
    displayValue.textContent += '2';
});

let buttonThree = document.querySelector('.three');
buttonThree.addEventListener('click', () => {
    displayValue.textContent += '3';
});

let buttonFour = document.querySelector('.four');
buttonFour.addEventListener('click', () => {
    displayValue.textContent += '4';
});

let buttonFive = document.querySelector('.five');
buttonFive.addEventListener('click', () => {
    displayValue.textContent += '5';
});

let buttonSix = document.querySelector('.six');
buttonSix.addEventListener('click', () => {
    displayValue.textContent += '6';
});

let buttonSeven = document.querySelector('.seven');
buttonSeven.addEventListener('click', () => {
    displayValue.textContent += '7';
});

let buttonEight = document.querySelector('.eight');
buttonEight.addEventListener('click', () => {
    displayValue.textContent += '8';
});

let buttonNine = document.querySelector('.nine');
buttonNine.addEventListener('click', () => {
    displayValue.textContent += '9';
});

let buttonZero = document.querySelector('.zero');
buttonZero.addEventListener('click', () => {
    displayValue.textContent += '0';
});

let buttonPlus = document.querySelector('.add-btn');
buttonPlus.addEventListener('click', () => {
    displayValue.textContent += '+';
});

let buttonSubstract = document.querySelector('.substract-btn');
buttonSubstract.addEventListener('click', () => {
    displayValue.textContent += '-';
});

let buttonMultiply = document.querySelector('.multiply-btn');
buttonMultiply.addEventListener('click', () => {
    displayValue.textContent += '*';
});

let buttonDivide = document.querySelector('.divide-btn');
buttonDivide.addEventListener('click', () => {
    displayValue.textContent += '/';
});

let buttonEquals = document.querySelector('.equals-btn');
buttonEquals.addEventListener('click', () => {
    displayValue.textContent = operate(displayValue);
});
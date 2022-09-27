//Create basic mathematical functions
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
let displayValue = document.querySelector('.display');
let a 
let b
let operator

//takes an operator and 2 numbers and then calls created mathematical functions on the numbers
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

//Populate the display when the buttons are clicked

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

let buttonDec = document.querySelector('.dec-btn');
buttonDec.addEventListener('click', () => {
    if (operator === undefined && displayValue.textContent.split(operator)[0].includes('.')){
        return;
    } else if (operator !== undefined && displayValue.textContent.split(operator)[1].includes('.')){
        return;
    }
    displayValue.textContent += '.';
});



//Clear all button 
let buttonClearAll = document.querySelector('.clear-all-btn');
buttonClearAll.addEventListener('click', () => {
    displayValue.textContent = '';
    a = undefined;
    b = undefined;
    operator = undefined;
});

//Function to prevent multiple operators in a row
function displayOperator (oper){
    if (operator !== undefined){
        return;
    } else {
        operator = oper;
        displayValue.textContent += oper;
}};

//Round the result
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

//Takes number a and b and operator, displayOperators and displays the result
function displayResult(){
    a = Number(displayValue.textContent.split(operator)[0]);
    b = Number(displayValue.textContent.split(operator)[1]);
    let result = operate(a,operator,b);

    if (displayValue.textContent.split(operator)[1] === ''){
        return;
    } else if (operator === '/' && b === 0){
        displayValue.textContent = 'Nice try';
        return;
    } else {
        displayValue.textContent = round(result,2);
        operator = undefined;
        b = undefined;
    };
};


let buttonPlus = document.querySelector('.add-btn');
buttonPlus.addEventListener('click', () => {
    if (operator === undefined){
        displayOperator('+');
    } else {
        displayResult();
        displayOperator('+')
    }
});

let buttonSubstract = document.querySelector('.substract-btn');
buttonSubstract.addEventListener('click', () => {
    if (operator === undefined){
        displayOperator('-');
    } else {
        displayResult();
        displayOperator('-')
    }
});

let buttonMultiply = document.querySelector('.multiply-btn');
buttonMultiply.addEventListener('click', () => {
    if (operator === undefined){
        displayOperator('*');
    } else {
        displayResult();
        displayOperator('*')
    }
});

let buttonDivide = document.querySelector('.divide-btn');
buttonDivide.addEventListener('click', () => {
    if (operator === undefined){
        displayOperator('/');
    } else {
        displayResult();
        displayOperator('/')
    }
});

//Click on equal button runs the operate function to calculate value
let buttonEquals = document.querySelector('.equals-btn');
buttonEquals.addEventListener('click', () => {
    if (operator === undefined){
        return;
    } else {
        displayResult();
    };
});

function clear (){
    if (displayValue.textContent.split(operator)[1] === ''){
        displayValue.textContent = displayValue.textContent.substring(0, displayValue.textContent.length - 1);
        operator = undefined;
    } else {
        displayValue.textContent = displayValue.textContent.substring(0, displayValue.textContent.length - 1);
    }
};

//Clear one character button 
let buttonClear = document.querySelector('.clear-btn');
buttonClear.addEventListener('click', clear);

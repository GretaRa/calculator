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

let displayValue = document.querySelector('.display');
let a 
let b
let operator



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

//Clear button 
let buttonClear = document.querySelector('.clear-btn');
buttonClear.addEventListener('click', () => {
    displayValue.textContent = '';
    a = undefined;
    b = undefined;
    operator = undefined;
});


//Function to prevent multiple operators in a row
function calculate (oper){
    if (operator !== undefined){
        return;
    } else {
        operator = oper;
        displayValue.textContent += oper;
}};

let buttonPlus = document.querySelector('.add-btn');
buttonPlus.addEventListener('click', function()
{calculate('+')});

let buttonSubstract = document.querySelector('.substract-btn');
buttonSubstract.addEventListener('click', function()
{calculate('-')});

let buttonMultiply = document.querySelector('.multiply-btn');
buttonMultiply.addEventListener('click', function()
{calculate('*')});

let buttonDivide = document.querySelector('.divide-btn');
buttonDivide.addEventListener('click', function()
{calculate('/')});

//Click on equal button runs the operate function to calculate value
let buttonEquals = document.querySelector('.equals-btn');
buttonEquals.addEventListener('click', () => {
    a = Number(displayValue.textContent.split(operator)[0]);
    b = Number(displayValue.textContent.split(operator)[1]);
    displayValue.textContent = operate(a,operator,b);
    operator = undefined;
});


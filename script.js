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

function clearDisplay (){
    displayValue.textContent = '';
    a = undefined;
    b = undefined;
    operator = undefined;
    reset=false;
};


//Clear all button 
let buttonClearAll = document.querySelector('.clear-all-btn');
buttonClearAll.addEventListener('click', clearDisplay);

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

function handleOperatorEvent (operatorSign){
    if (operator === undefined){
        displayOperator(operatorSign);
    } else {
        displayResult();
        displayOperator(operatorSign);
    }
};


let buttonPlus = document.querySelector('.add-btn');
buttonPlus.addEventListener('click', () => {
   handleOperatorEvent ('+');
});

let buttonSubstract = document.querySelector('.substract-btn');
buttonSubstract.addEventListener('click', () => {
    handleOperatorEvent ('-');
});

let buttonMultiply = document.querySelector('.multiply-btn');
buttonMultiply.addEventListener('click', () => {
    handleOperatorEvent ('*');
});

let buttonDivide = document.querySelector('.divide-btn');
buttonDivide.addEventListener('click', () => {
    handleOperatorEvent ('/');
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

//keyboard
let reset=false;
				
const display=function( data ){
    displayValue.textContent += data;
};

const keyhandler=function(e){
    let key=e.keyCode;
    if( reset==true )clearDisplay();
    const validkeys=[ 8,13,48,49,50,51,52,53,54,55,56,57,67,107,109,106,111,187,190,96,97,98,99,100,101,102,103,104,105 ];
    if( ~validkeys.indexOf( key ) ){
        switch( e.keyCode ){
            case 107:
                handleOperatorEvent ('+');
            break;
            case 109:
                handleOperatorEvent ('-');
            break;
            case 106:
                handleOperatorEvent ('*');
            break;
            case 111:
                handleOperatorEvent ('/');
            break;
            case 190:
                if (operator === undefined && displayValue.textContent.split(operator)[0].includes('.')){
                    return;
                } else if (operator !== undefined && displayValue.textContent.split(operator)[1].includes('.')){
                    return;
                }
                displayValue.textContent += '.';
            break;
            case 8:
                clear();
            break;
            case 13:
            case 187:
                if (operator === undefined){
                    return;
                } else {
                    displayResult();
                };						
            break;
            case 67:
                clearDisplay();
            break;
            
            default:
                display( e.key )
            break;
        }
    }
};

/* Bind event listeners - keyup and button click */
document.addEventListener('keyup', keyhandler );
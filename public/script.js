let firstNum = "";
let secondNum = "";
let focusedOnFirstNum = true;
let currOperation = "";
const clearAll = () => {
    firstNum = "0";
    secondNum = "0";
    focusedOnFirstNum = true;
    display();
}

const clear = () => {
    if(focusedOnFirstNum) firstNum = "0";
    else secondNum = "0";
    display();
}

const toggleSign = () => {
    if(focusedOnFirstNum) firstNum = (parseFloat(firstNum, 10) * -1).toString(10);
    else secondNum = (parseFloat(secondNum, 10) * -1).toString(10);
    display();
}

const getTotal = () => {
    firstNum = calculate(firstNum, secondNum, currOperation);
    focusedOnFirstNum = true;
    secondNum = "0";
    display();
}

const operation = (sign) => {
    currOperation = sign;
    focusedOnFirstNum = false;
    
}

const addToNumString = (value) => {
    if(focusedOnFirstNum) {
        if(firstNum != "0") firstNum += value.toString(10);
        else firstNum = value;
    }
    else {
        if(secondNum != "0") secondNum += value.toString(10);
        else secondNum = value;
    }
    display();
}

//Renders new text on the output element
const display = () => {
    let value = firstNum;
    if(!focusedOnFirstNum) value = secondNum;
    document.getElementById("output").innerHTML = value;

}

const sanitizeInput = (input) => {
    return parseFloat(input, 10);
}



////////////////////////////////////
//Methods to Unit Test

const add = (num1, num2) => {
    return sanitizeInput(num1) + sanitizeInput(num2);
}

const subtract = (num1, num2) => {
    return sanitizeInput(num1) - sanitizeInput(num2);
}

const multiply = (num1, num2) => {
    return sanitizeInput(num1) * sanitizeInput(num2);
}

const divide = (num1, num2) => {
    if(num2 === 0) return 0;
    return sanitizeInput(num1) / sanitizeInput(num2);
}


const calculate = (firstValue, secondValue, operationString) => {
    operationString = operationString.toLowerCase();
    if(!/(add|subtract|multiply|divide)/.test(operationString)) {
        throw "Operation not recognized";
    }
    else {
        switch(operationString) {
            case "add":
                return add(firstValue, secondValue);
            case "subtract":
                return subtract(firstValue, secondValue);
            case "multiply":
                return multiply(firstValue, secondValue);
            case "divide":
                return divide(firstValue, secondValue);
        }
    }
}

///////////////////////////////////



document.getElementById("clearAll").addEventListener("click", () => {clearAll();});
document.getElementById("clear").addEventListener("click", () => {clear();});
document.getElementById("toggleSign").addEventListener("click", () => {toggleSign();});
document.getElementById("equals").addEventListener("click", () => {getTotal();});


document.getElementById("multiply").addEventListener("click", () => {operation("multiply");});
document.getElementById("divide").addEventListener("click", () => {operation("divide");});
document.getElementById("add").addEventListener("click", () => {operation("add");});
document.getElementById("subtract").addEventListener("click", () => {operation("subtract");});

document.getElementById("decimal").addEventListener("click", () => {addToNumString(".")});
for(let i = 0; i < 10; i++) {
    document.getElementById(i).addEventListener("click", () => {addToNumString(i)});
}

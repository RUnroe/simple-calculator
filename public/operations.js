const sanitizeInput = (input) => {
    return parseFloat(input, 10);
}



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

module.exports = {add, subtract, multiply, divide, calculate};
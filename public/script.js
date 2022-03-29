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
    let firstValue = parseFloat(firstNum, 10);
    let secondValue = parseFloat(secondNum, 10);
    switch(currOperation) {
        case "add":
            firstNum = firstValue + secondValue;
        break;
        case "subtract":
            firstNum = firstValue - secondValue;
        break;
        case "multiply":
            firstNum = firstValue * secondValue;
        break;
        case "divide":
            firstNum = firstValue / secondValue;
        break;
        case "mod":
            firstNum = firstValue % secondValue;
        break;
    }
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

const display = () => {
    let value = firstNum;
    if(!focusedOnFirstNum) value = secondNum;
    document.getElementById("output").innerHTML = value;

}




document.getElementById("clearAll").addEventListener("click", () => {clearAll();});
document.getElementById("clear").addEventListener("click", () => {clear();});
document.getElementById("toggleSign").addEventListener("click", () => {toggleSign();});
document.getElementById("equals").addEventListener("click", () => {getTotal();});


document.getElementById("multiply").addEventListener("click", () => {operation("multiply");});
document.getElementById("divide").addEventListener("click", () => {operation("divide");});
document.getElementById("add").addEventListener("click", () => {operation("add");});
document.getElementById("subtract").addEventListener("click", () => {operation("subtract");});
document.getElementById("mod").addEventListener("click", () => {operation("mod");});

document.getElementById("decimal").addEventListener("click", () => {addToNumString(".")});
for(let i = 0; i < 10; i++) {
    document.getElementById(i).addEventListener("click", () => {addToNumString(i)});
}

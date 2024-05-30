// const display = document.getElementsByClassName(".display")
// const div = document.createElement("div")
// display.appendChild(div);

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x*y;
}

function divide(x, y){
    return x/y;
}

let x = 0;
let y = 0;
let operator = "";

function operate(x, y, operator){
    switch(operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
}
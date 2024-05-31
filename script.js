const display = document.querySelector(".display");
const displayText = document.createElement("p");
displayText.textContent = "0.0";
display.appendChild(displayText)

let newDisplay;

const buttons = document.querySelectorAll(".type");
let change = true;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        if(change){
            display.removeChild(displayText);
            newDisplay = document.createElement("p");
            newDisplay.textContent = buttons[i].textContent;
            display.appendChild(newDisplay)
            change = false;
        } else {
            let current = newDisplay.textContent;
            if(buttons[i].getAttribute("id") == "operators"){
                newDisplay.textContent = (current + " " + buttons[i].textContent) + " ";
            } else {
                newDisplay.textContent = (current + buttons[i].textContent);
            }
        }
    });
}
// for(button in buttons){
//     button.onClick = () => alert("hi");
// }
// dipslayText.textContent = (current + button.textContent);

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
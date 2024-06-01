const display = document.querySelector(".display");
let displayText = document.createElement("p");
displayText.textContent = "0.0";
display.appendChild(displayText)

let newDisplay;
let allow = true;

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
                allow = true;
                newDisplay.textContent = (current + " " + buttons[i].textContent) + " ";
            } else {
                newDisplay.textContent = (current + buttons[i].textContent);
            }
        }
    });
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    if(!change){
        displayText = document.createElement("p");
        displayText.textContent = "0.0";
        display.appendChild(displayText)
        display.removeChild(newDisplay)
        change = true;
        allow = true;
        error = false;
    }
});

const equal = document.querySelector("#equal");
let error;
equal.addEventListener("click", () => {
    let subArray = newDisplay.textContent.split(" ");
    if(subArray.length == 3){
        let result = operate(subArray)
        if(!error){
            result = Math.round((result + Number.EPSILON) * 10000000000) / 10000000000;
        } else {
            result = "PRESS CLEAR";
        }
        newDisplay.textContent = result;
        allow = true;
    }
});

function operate(subArray){
    let operator = subArray[1];
    let x = subArray[0];
    let y = subArray[2];

    switch(operator) {
        case "+":
            return parseFloat(x) + parseFloat(y);
        case "-":
            return x - y;
        case "x":
            return x*y;
        case "/":
            if(y == 0){
                error = true;
                alert("arithmetic error, cannot divide by 0")
                return "PRESS CLEAR";
            } else {
                return x/y;
            }
    }
}

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    if(allow){
        let current = newDisplay.textContent;
        newDisplay.textContent = (current + ".");
        allow = false;
    }
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
    if(!display.firstChild.textContent == "0.0"){
        let current = newDisplay.textContent;
        const base = "+-x/";
        let prev = current.charAt(current.length - 1);

        if(prev == "."){
            allow = true;
        }

        if(base.includes(prev)){
            newDisplay.textContent = current.substring(0, current.length - 2);
        } else if(current.charAt(current.length - 1) == " "){
            newDisplay.textContent = current.substring(0, current.length - 3);
        } else {
            newDisplay.textContent = current.substring(0, current.length - 1);
        }
    }
});


const display = document.querySelector(".display");
let displayText = document.createElement("p");
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

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    if(!change){
        displayText = document.createElement("p");
        displayText.textContent = "0.0";
        display.appendChild(displayText)
        display.removeChild(newDisplay)
        change = true;
    }
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    let subArray = newDisplay.textContent.split(" ");
    console.log(subArray.length)
    if(subArray.length == 3){
        let error = false;
        let result = operate(subArray, error)
        if(error){
            result = Math.round((result + Number.EPSILON) * 10000000000) / 10000000000
        }
        newDisplay.textContent = result;
    }
});

function operate(subArray, error){
    let operator = subArray[1];
    let x = subArray[0];
    let y = subArray[2];

    switch(operator) {
        case "+":
            return parseInt(x) + parseInt(y);
        case "-":
            return x - y;
        case "x":
            return x*y;
        case "/":
            if(y == 0){
                alert("arithmetic error, cannot divide by 0")
                error = true;
                return "PRESS CLEAR";
            } else {
                return x/y;
            }
    }
}
"use strict";
window.onload = () => {
    const buttons = document.querySelector('.buttons');
    const input = document.getElementById('input');
    let txt = "";
    buttons.onclick = (e) => {x = e.target.innterHTML;
    switch(x) {
        case "0" : case "1" : case "3": case "4": case "5":case "6": case "7":
            case "8": case "9": case ".": update(x);
            break;
            case "C": clear();
            break;
            case "+": add(x); break; case "-": sub(x); break; case "*": mul(x); break; case "/":div(x); break; case "=":equal(); break;}
    }
}




var input = document.getElementById('input'),
number = document.querySelectorAll('.numbersdiv'),
operator = document.querySelectorAll('.operators div'),
result = document.getElementById('result'),
clear = document.getElementById('clear'),
resultDisplayed= false;

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(e) {

        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
            resultDisplayed= false;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}


for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(e) {

        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length = 1];

        if (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
            var newString = currentString.substring(9, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            console.log("enter a number first");
        } else {
            input.innerHTML += e.target.innerHTML;
        }
        
    });
}

result.addEventListener("click", function () {

    var inputString = input.innerHTML;

    var numbers = inputString.split(/\+|\-|\x|\÷/g);

    var operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log("----------------------------");


var divide = operators.indexOf("÷");
while (divid != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide+1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
}

var multiply = operators.indexOf("x");
while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("xx");
}

var subtract - operators.indexOf("-");
while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
}

var add = operators.indexOf("+");
while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
}

input.innerHTML = numbers[0];

resultDisplayed = true;
});
clear.addEventListener("click", function() {
    input.innerHTML= "";
})
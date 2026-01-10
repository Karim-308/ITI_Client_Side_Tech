document.getElementById("Answer").readOnly = true;

var inp = document.querySelector("#Answer");
var firstNum = 0;
var operator = "";

function EnterNumber(num){
    if(num === "." && inp.value.includes(".")){
        return;
    }
      if (inp.value === "0" && num !== ".") {
        inp.value = num;
        return;
    }
     inp.value += num
 }

 function EnterOperator(op){
    if (inp.value === "" && op === "-") {
        inp.value = "-";
    }
   else if (inp.value === "") {
        return;
    }
    else {
        firstNum = Number(inp.value);
        operator = op;
        inp.value = "";
    }
 }

function EnterEqual(){

    if (operator === "" || inp.value === "") {
        return;
    }

    var secondNum = Number(inp.value);
    var result = 0;

    switch(operator){
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            if (secondNum === 0) {
            result = "Error";
            } else {
            result = firstNum / secondNum;
            }
            break;
    }
    inp.value = result;
}

function EnterClear(){
    inp.value = "";
    firstNum = 0;
    operator = "";
}


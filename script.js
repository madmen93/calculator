const print = document.querySelector(".text");
const numOne = document.querySelector("#one");
const numTwo = document.querySelector("#two");
const numThree = document.querySelector("#three");
const numFour = document.querySelector("#four");
const numFive = document.querySelector("#five");
const numSix = document.querySelector("#six");
const numSeven = document.querySelector("#seven");
const numEight = document.querySelector("#eight");
const numNine = document.querySelector("#nine");
const numCero = document.querySelector("#cero");
const point = document.querySelector("#decimal");
const result = document.querySelector("#result");
const sum = document.querySelector("#sum");
const sub = document.querySelector("#substraction");
const multiply = document.querySelector("#multiplication");
const divide = document.querySelector("#divide");
const percent = document.querySelector("#percentage");
const sumSubtraction = document.querySelector("#sumSus");
const allClear = document.querySelector("#delete");
const backspace = document.querySelector("#undo");

let firstNum = 0;
let operator;
let secondNum = 0;
let answer;
let countDecimal = 0;
let countDecimalSecond = 0;
let newNumber = true;
let countOperator = 0;
let percentOne = false;
let percentTwo = false;

//Display numbers and math operations:
function operate(event){
    if(print.textContent == "0"  && event.target.id != "decimal"){
        print.textContent = "";
    }
    switch (event.target.id) {
            case "one":
                    if(print.textContent.length < 12 && operator == undefined && percentOne == false){
                        print.textContent += 1;
                    }else if(percentOne && operator == undefined){
                    print.textContent += 1;
                    answer = Number(print.textContent);
                    }
                    if(operator != undefined && newNumber){
                        print.textContent = "";
                        print.textContent += 1;
                        newNumber = false;
                    }else if(!newNumber && print.textContent.length < 12){
                        print.textContent += 1;
                    }
                break;
            case "two":
                if(print.textContent.length < 12 && operator == undefined && percentOne == false){
                    print.textContent += 2;
                }else if(percentOne && operator == undefined){
                    print.textContent += 2;
                    answer = Number(print.textContent);
                }
                if(operator != undefined && newNumber){
                    print.textContent = "";
                    print.textContent += 2;
                    newNumber = false;
                }else if(!newNumber && print.textContent.length < 12){
                    print.textContent += 2;
                }
                break;
            case "three":
                if(print.textContent.length < 12 && operator == undefined && percentOne == false){
                    print.textContent += 3;
                }else if(percentOne && operator == undefined){
                    print.textContent += 3;
                    answer = Number(print.textContent);
                }
                if(operator != undefined && newNumber){
                    print.textContent = "";
                    print.textContent += 3;
                    newNumber = false;
                }else if(!newNumber && print.textContent.length < 12){
                    print.textContent += 3;
                }
                break;
            case "four":
                if(print.textContent.length < 12 && operator == undefined && percentOne == false){
                    print.textContent += 4;
                }else if(percentOne && operator == undefined){
                    print.textContent += 4;
                    answer = Number(print.textContent);
                }
                if(operator != undefined && newNumber){
                    print.textContent = "";
                    print.textContent += 4;
                    newNumber = false;
                }else if(!newNumber && print.textContent.length < 12){
                    print.textContent += 4;
                }
                break;
            case "five":
                if(print.textContent.length < 12 && operator == undefined && percentOne == false){
                    print.textContent += 5;
                }else if(percentOne && operator == undefined){
                    print.textContent += 5;
                    answer = Number(print.textContent);
                }
                if(operator != undefined && newNumber){
                    print.textContent = "";
                    print.textContent += 5;
                    newNumber = false;
                }else if(!newNumber && print.textContent.length < 12){
                    print.textContent += 5;
                }
                break;
            case "six":
                if(print.textContent.length < 12 && operator == undefined && percentOne == false){
                    print.textContent += 6;
                }else if(percentOne && operator == undefined){
                    print.textContent += 6;
                    answer = Number(print.textContent);
                }
                if(operator != undefined && newNumber){
                    print.textContent = "";
                    print.textContent += 6;
                    newNumber = false;
                }else if(!newNumber && print.textContent.length < 12){
                    print.textContent += 6;
                }
                break;
            case "seven":
                if(print.textContent.length < 12 && operator == undefined && percentOne == false){
                    print.textContent += 7;
                }else if(percentOne && operator == undefined){
                    print.textContent += 7;
                    answer = Number(print.textContent);
                }
                if(operator != undefined && newNumber){
                    print.textContent = "";
                    print.textContent += 7;
                    newNumber = false;
                }else if(!newNumber && print.textContent.length < 12){
                    print.textContent += 7;
                }
                break;
            case "eight":
                if(print.textContent.length < 12 && operator == undefined && percentOne == false){
                    print.textContent += 8;
                }else if(percentOne && operator == undefined){
                    print.textContent += 8;
                    answer = Number(print.textContent);
                }
                if(operator != undefined && newNumber){
                    print.textContent = "";
                    print.textContent += 8;
                    newNumber = false;
                }else if(!newNumber && print.textContent.length < 12){
                    print.textContent += 8;
                }
                break;
            case "nine":
                if(print.textContent.length < 12 && operator == undefined && percentOne == false){
                    print.textContent += 9;
                }else if(percentOne && operator == undefined){
                    print.textContent += 9;
                    answer = Number(print.textContent);
                }
                if(operator != undefined && newNumber){
                    print.textContent = "";
                    print.textContent += 9;
                    newNumber = false;
                }else if(!newNumber && print.textContent.length < 12){
                    print.textContent += 9;
                }
                break;
            case "cero":
                if(print.textContent.length < 12 && operator == undefined && percentOne == false){
                    print.textContent += 0;
                }else if(percentOne && operator == undefined){
                    print.textContent += 0;
                    answer = Number(print.textContent);
                }
                if(operator != undefined && newNumber){
                    print.textContent = "";
                    print.textContent += 0;
                    newNumber = false;
                }else if(!newNumber && print.textContent.length < 12){
                    print.textContent += 0;
                }
                break;
            case "decimal":
                if(print.textContent.length < 12 && countDecimal == 0 && operator == undefined){
                    print.textContent += ".";
                    countDecimal++;
                }else if(operator != undefined && newNumber){
                    print.textContent = "";
                    print.textContent += "0.";
                    newNumber = false;
                    countDecimalSecond++;
                }
                if(print.textContent.length < 12 && countDecimalSecond == 0 && operator != undefined){
                    print.textContent += ".";
                    countDecimalSecond++;
                }
                break;
            case "sum":
                if(countOperator >= 1){
                    switch (operator) {
                        case "sum":
                            answer = add();
                            break;
                        case "substraction":
                            answer = subtract();
                            break;
                        case "multiplication":
                            answer = mult();
                            break;
                        case "divide":
                            answer = division();
                        default:
                            break;
                    }
                    print.textContent = answer;
                    firstNum = answer;
                }
                operator = "sum";
                newNumber = true;
                countDecimalSecond = 0;
                countOperator++;
                break;
            case "substraction":
                if(countOperator >= 1){
                    switch (operator) {
                        case "sum":
                            answer = add();
                            break;
                        case "substraction":
                            answer = subtract();
                            break;
                        case "multiplication":
                            answer = mult();
                            break;
                        case "divide":
                            answer = division();
                        default:
                            break;
                    }
                    print.textContent = answer;
                    firstNum = answer;
                }
                operator = "substraction";
                newNumber = true;
                countDecimalSecond = 0;
                countOperator++;
                break;
            case "multiplication":
                if(countOperator >= 1){
                    switch (operator) {
                        case "sum":
                            answer = add();
                            break;
                        case "substraction":
                            answer = subtract();
                            break;
                        case "multiplication":
                            answer = mult();
                            break;
                        case "divide":
                            answer = division();
                        default:
                            break;
                    }
                    print.textContent = answer;
                    firstNum = answer;
                }
                operator = "multiplication";
                newNumber = true;
                countDecimalSecond = 0;
                countOperator++;
                break;
            case "divide":
                if(countOperator >= 1){
                    switch (operator) {
                        case "sum":
                            answer = add();
                            break;
                        case "substraction":
                            answer = subtract();
                            break;
                        case "multiplication":
                            answer = mult();
                            break;
                        case "divide":
                            answer = division();
                        default:
                            break;
                    }
                    print.textContent = answer;
                    firstNum = answer;
                }
                operator = "divide";
                newNumber = true;
                countDecimalSecond = 0;
                countOperator++;
                break;
            case "percentage":
                if(countOperator >= 1){
                    switch (operator) {
                        case "sum":
                            answer = percentageSum();
                            break;
                        case "substraction":
                            answer = percentageSum();
                            break;
                        case "multiplication":
                            answer = percentageSecondNum();
                            break;
                        case "divide":
                            answer = percentageSecondNum();
                            break;
                        default:
                            break;
                    }
                    print.textContent = answer;
                    percentTwo = true;
                }else{
                    answer = percentage();
                    print.textContent = answer;
                    firstNum = answer;
                }
                percentOne = true;
                newNumber = true;
                countOperator++;
                countDecimal++;
                countDecimalSecond++;
                break;
            case "sumSus":
                if(countOperator >= 1){
                    answer = sumSubSecond();
                }else{
                    answer = sumSubFirst();
                }
                print.textContent = answer;
                break;
            case "delete":
                print.textContent = "0";
                firstNum = 0;
                secondNum = 0;
                countDecimal = 0;
                countDecimalSecond = 0;
                operator = undefined;
                answer = undefined;
                newNumber = true;
                countOperator = 0;
                percentOne = false;
                percentTwo = false;
                break;
            case "undo":
                textAux = print.textContent.slice(0, -1);
                if(textAux == "")
                    textAux = 0;
                print.textContent = textAux;
                answer = textAux;
                if(countDecimal != 0)
                    countDecimal = 0;
                if(countDecimalSecond != 0)
                    countDecimalSecond = 0;
                break;
            case "result":
                switch (operator) {
                    case "sum":
                        answer = add();
                        break;
                    case "substraction":
                        answer = subtract();
                        break;
                    case "multiplication":
                        answer = mult();
                        break;
                    case "divide":
                        answer = division();
                        break;
                    default:
                        break;
                }
                print.textContent = answer;
                firstNum = answer;
                newNumber = true;
                countOperator = 0;
                countDecimalSecond = 0;
                break;
            default:
                break;
        }
        if(operator == undefined || countOperator == 0)
            firstNum = Number(print.textContent);
        else
            secondNum = Number(print.textContent);
    }
function add(){
    return firstNum + secondNum;
}
function subtract(){
    return firstNum - secondNum;
}
function mult(){
    return firstNum * secondNum;
}
function division(){
    return firstNum / secondNum;
}
function percentage(){
    return firstNum / 100;
}
function percentageSecondNum(){
    return secondNum / 100;
}
function percentageSum(){
    return firstNum * secondNum / 100;
}
function sumSubFirst(){
    return firstNum * (-1);
}
function sumSubSecond(){
    return secondNum * (-1);
}

numOne.addEventListener("click", operate);
numTwo.addEventListener("click", operate);
numThree.addEventListener("click", operate);
numFour.addEventListener("click", operate);
numFive.addEventListener("click", operate);
numSix.addEventListener("click", operate);
numSeven.addEventListener("click", operate);
numEight.addEventListener("click", operate);
numNine.addEventListener("click", operate);
numCero.addEventListener("click", operate);
point.addEventListener("click", operate);
sum.addEventListener("click", operate);
sub.addEventListener("click", operate);
multiply.addEventListener("click", operate);
divide.addEventListener("click", operate);
result.addEventListener("click", operate);
percent.addEventListener("click", operate);
sumSubtraction.addEventListener("click",operate);
allClear.addEventListener("click", operate);
backspace.addEventListener("click", operate);
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
const sub = document.querySelector("#subtraction");
const multiply = document.querySelector("#multiplication");
const divide = document.querySelector("#divide");
const percent = document.querySelector("#percentage");
const sumSubtraction = document.querySelector("#sumSus");
const allClear = document.querySelector("#delete");
const backspace = document.querySelector("#undo");

let firstNum = 0;
let operator;
let secondNum = 0;
let answer = 0;
let countDecimal = 0;
let countDecimalSecond = 0;
let newNumber = true;
let countOperator = 0;
let percentOne = false;
let num;

//Display numbers and math operations:
function operate(event){
    if(print.textContent == "0"  && event.target.id != "decimal"){
        print.textContent = "";
    }
    switch (event.target.id) {
            case "one":
                num = 1;
                printNumber(num);
                break;
            case "two":
                num = 2;
                printNumber(num);
                break;
            case "three":
                num = 3;
                printNumber(num);
                break;
            case "four":
                num = 4;
                printNumber(num);
                break;
            case "five":
                num = 5;
                printNumber(num);
                break;
            case "six":
                num = 6;
                printNumber(num);
                break;
            case "seven":
                num = 7;
                printNumber(num);
                break;
            case "eight":
                num = 8;
                printNumber(num);
                break;
            case "nine":
                num = 9;
                printNumber(num);
                break;
            case "cero":
                num = 0;
                printNumber(num);
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
                mathOperations(countOperator, operator);
                operator = "sum";
                newNumber = true;
                countDecimalSecond = 0;
                countOperator++;
                break;
            case "subtraction":
                mathOperations(countOperator, operator);
                operator = "subtraction";
                newNumber = true;
                countDecimalSecond = 0;
                countOperator++;
                break;
            case "multiplication":
                mathOperations(countOperator, operator);
                operator = "multiplication";
                newNumber = true;
                countDecimalSecond = 0;
                countOperator++;
                break;
            case "divide":
                mathOperations(countOperator, operator);
                operator = "divide";
                newNumber = true;
                countDecimalSecond = 0;
                countOperator++;
                break;
            case "percentage":
                mathPercentage(countOperator, operator);
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
                showResult(operator);
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
        if(print.textContent == "")
            print.textContent = 0;
    }

//Print numbers:
function printNumber(num){
    if(print.textContent.length < 12 && operator == undefined && percentOne == false){
        print.textContent += num;
    }else if(percentOne && operator == undefined){
    print.textContent += num;
    answer = Number(print.textContent);
    }
    if(operator != undefined && newNumber){
        print.textContent = "";
        print.textContent += num;
        newNumber = false;
    }else if(!newNumber && print.textContent.length < 12){
        print.textContent += num;
    }
    return print.textContent;
}

//Cumulative mathematical operations:
function mathOperations(cont, operator){
    if(cont >= 1){
        switch (operator) {
            case "sum":
                answer = add();
                break;
            case "subtraction":
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
        return answer;
    }
}

//Operations with percentage:
function mathPercentage(cont, operator){
    if(cont >= 1){
        switch (operator) {
            case "sum":
                answer = percentageSum();
                break;
            case "subtraction":
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
    }else{
        answer = percentage();
        print.textContent = answer;
        firstNum = answer;
    }
    return answer;
}

//Result:
function showResult(operator){
    switch (operator) {
        case "sum":
            answer = add();
            break;
        case "subtraction":
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
    return answer;
}

//Math operations:
function add(){
    let result = firstNum + secondNum;
    if(result.length > 12)
        return result.toPrecision(10);
    else
        return result;
}
function subtract(){
    let result = firstNum - secondNum;
    if(result.length > 12)
        return result.toPrecision(10);
    else
        return result;
}
function mult(){
    let result = firstNum * secondNum;
    if(result.length > 12)
        return result.toPrecision(10);
    else
        return result;
}
function division(){
    let result = firstNum / secondNum;
    if(secondNum != 0){
        if(result.length > 12)
            return result.toPrecision(10);
        else
            return result;
    }else
        return "ERROR";
}
function percentage(){
    return firstNum / 100;
}
function percentageSecondNum(){
    return secondNum / 100;
}
function percentageSum(){
    let result = firstNum * secondNum / 100;
    if(result.length > 12)
        return result.toPrecision(10);
    else
        return result;
}
function sumSubFirst(){
    return firstNum * (-1);
}
function sumSubSecond(){
    return secondNum * (-1);
}

//Keyboard support:
document.addEventListener("keydown", function(event){
    if(event.key == 1)
        numOne.click();
    if(event.key == 2)
        numTwo.click();
    if(event.key == 3)
        numThree.click();
    if(event.key == 4)
        numFour.click();
    if(event.key == 5)
        numFive.click();
    if(event.key == 6)
        numSix.click();
    if(event.key == 7)
        numSeven.click();
    if(event.key == 8)
        numEight.click();
    if(event.key == 9)
        numNine.click();
    if(event.key == 0)
        numCero.click();
    if(event.key == ".")
        point.click();
    if(event.key == "Backspace")
        backspace.click();
})

//Buttons events:
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
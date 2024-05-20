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


let firstNum;
let operator;
let secondNum;
let answer;
let countDecimal = 0;
let countDecimalSecond = 0;

//Display first number:
function operate(event){
    if(print.textContent == "0"  && event.target.id != "decimal"){
        print.textContent = "";
    }

    if(print.textContent.length <= 13){
        switch (event.target.id) {
            case "one":
                if(operator == undefined)
                    print.textContent += 1;
                else if(operator != undefined && countDecimalSecond < 1){
                    print.textContent = "";
                    print.textContent += 1;
                }else{
                    print.textContent += 1;
                }
                break;
            case "two":
                if(operator == undefined)
                    print.textContent += 2;
                else if(operator != undefined && countDecimalSecond < 1){
                    print.textContent = "";
                    print.textContent += 2;
                }else{
                    print.textContent += 2;
                }
                break;
            case "three":
                if(operator == undefined)
                    print.textContent += 3;
                else if(operator != undefined && countDecimalSecond < 1){
                    print.textContent = "";
                    print.textContent += 3;
                }else{
                    print.textContent += 3;
                }
                break;
            case "four":
                if(operator == undefined)
                    print.textContent += 4;
                else if(operator != undefined && countDecimalSecond < 1){
                    print.textContent = "";
                    print.textContent += 4;
                }else{
                    print.textContent += 4;
                }
                break;
            case "five":
                if(operator == undefined)
                    print.textContent += 5;
                else if(operator != undefined && countDecimalSecond < 1){
                    print.textContent = "";
                    print.textContent += 5;
                }else{
                    print.textContent += 5;
                }
                break;
            case "six":
                if(operator == undefined)
                    print.textContent += 6;
                else if(operator != undefined && countDecimalSecond < 1){
                    print.textContent = "";
                    print.textContent += 6;
                }else{
                    print.textContent += 6;
                }
                break;
            case "seven":
                if(operator == undefined)
                    print.textContent += 7;
                else if(operator != undefined && countDecimalSecond < 1){
                    print.textContent = "";
                    print.textContent += 7;
                }else{
                    print.textContent += 7;
                }
                break;
            case "eight":
                if(operator == undefined)
                    print.textContent += 8;
                else if(operator != undefined && countDecimalSecond < 1){
                    print.textContent = "";
                    print.textContent += 8;
                }else{
                    print.textContent += 8;
                }
                break;
            case "nine":
                if(operator == undefined)
                    print.textContent += 9;
                else if(operator != undefined && countDecimalSecond < 1){
                    print.textContent = "";
                    print.textContent += 9;
                }else{
                    print.textContent += 9;
                }
                break;
            case "cero":
                if(print.textContent != "0" && operator == undefined){
                    print.textContent += 0;
                }else if(operator != undefined && countDecimalSecond < 1){
                    print.textContent = "";
                    print.textContent += 0;
                }else{
                    print.textContent += 0;
                }
                break;
            case "decimal":
                if(countDecimal < 1 && operator == undefined){
                    print.textContent += ".";
                    countDecimal++;
                }else if(countDecimalSecond < 1 && operator != undefined && secondNum == undefined ){
                    print.textContent = "";
                    print.textContent += "0.";
                    countDecimalSecond++;
                }else if(countDecimalSecond < 1 && operator != undefined && secondNum != undefined ){
                    print.textContent += ".";
                    countDecimalSecond++;
                }
                break;
            case "sum":
                operator = "sum";
                break;
            case "result":
                switch (operator) {
                    case "sum":
                        answer = add();
                        print.textContent = answer;
                        break;
                
                    default:
                        break;
                }
            default:
                break;
        }
        if(operator == undefined)
            firstNum = Number(print.textContent);
        else
            secondNum = Number(print.textContent);
    }
}

function add(){
    return firstNum + secondNum;
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
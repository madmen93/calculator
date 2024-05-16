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
let countDecimal = 0;

//Display first number:
function display(event){
    if(print.textContent == "0"  && event.target.id != "decimal"){
        print.textContent = "";
    }

    if(print.textContent.length <= 13){
        switch (event.target.id) {
            case "one":
                print.textContent += 1;
                break;
            case "two":
                print.textContent += 2;
                break;
            case "three":
                print.textContent += 3;
                break;
            case "four":
                print.textContent += 4;
                break;
            case "five":
                print.textContent += 5;
                break;
            case "six":
                print.textContent += 6;
                break;
            case "seven":
                print.textContent += 7;
                break;
            case "eight":
                print.textContent += 8;
                break;
            case "nine":
                print.textContent += 9;
                break;
            case "cero":
                if(print.textContent != "0"){
                    print.textContent += 0;
                }
                break;
            case "decimal":
                if(countDecimal < 1){
                    print.textContent += ".";
                    countDecimal++;
                }
                break;
            default:
                break;
        }
        firstNum = Number(print.textContent);
    }
    return firstNum;
}

function operate(){

}

numOne.addEventListener("click", display);
numTwo.addEventListener("click", display);
numThree.addEventListener("click", display);
numFour.addEventListener("click", display);
numFive.addEventListener("click", display);
numSix.addEventListener("click", display);
numSeven.addEventListener("click", display);
numEight.addEventListener("click", display);
numNine.addEventListener("click", display);
numCero.addEventListener("click", display);
point.addEventListener("click", display);
sum.addEventListener("click", operate);
sub.addEventListener("click", operate);
multiply.addEventListener("click", operate);
divide.addEventListener("click", operate);
result.addEventListener("click", operate);
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


let firstNum;
let operator;
let secondNum;
let cont = 0;

function display(event){
    //print.textContent = "";
    console.log(event.target);
    console.log(event.target.id);
    cont++;
    if(cont <= 13){
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
                print.textContent += 0;
                break;
            default:
                break;
        }
        firstNum = Number(print.textContent);
        console.log(firstNum);
    }
    
    
    
}

//numOne.addEventListener("click", pressNumOne);
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

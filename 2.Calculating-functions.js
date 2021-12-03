'use strict'

// Write a function that calculates sum, difference, multiplication and division between given array
// elements depending on passed operation symbol. Write appropriate function for each operation.

let arr = [1,2,3,4,5,6];

function sum(lSide, rSide){
    return lSide + rSide;
}
function diff(lSide, rSide){
    return lSide - rSide;
}
function multiple(lSide, rSide){
    lSide = 1;
    return lSide * rSide;
}
function divide(lSide, rSide){
    lSide = 1;
    return lSide / rSide;
}

function calculate(arr, operation){
    let result = 0;
    for (let i=0; i<arr.length; i++){
        result = operation(result, arr[i]);
    }
    return result;
}

console.log(calculate(arr, sum));
console.log(calculate(arr, diff));
console.log(calculate(arr, divide));
console.log(calculate(arr, multiple));
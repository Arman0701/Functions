'use strict'

// Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.

function sumOfNumb(str) {
    let tmp = "";
    let sum = 0;
    for (let i = 0; i <= str.length; i++){
        if (/[0-9-]/.test(str[i])){
            tmp += str[i];
        } else {
            sum += Number(tmp);
            tmp = "";
        }
    }
    return sum;
}
console.log(sumOfNumb('FwrtY45KHL120mn10P'));
console.log(sumOfNumb('Wert12lop-12'));
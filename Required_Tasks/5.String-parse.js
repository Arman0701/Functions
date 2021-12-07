'use strict'

// Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.

function sumOfNumb(str) {
    let tmp = "";
    let sum = 0;
    for (let i = 0; i <= str.length; i++){
        if (/[0-9-]/.test(str[i]) && str[i+1] !== '-'){
            tmp += str[i];
            sum+=tmp;
        } else {
            sum += Number(tmp);
            tmp = "";
        }
    }
    return sum;
}
console.log(sumOfNumb('FwrtY45K$HL120mn10P'));
console.log(sumOfNumb('Wert12lop-12'));
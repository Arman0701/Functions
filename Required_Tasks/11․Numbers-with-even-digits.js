'use strict'

// Write a function, which receives two numbers as arguments and finds all numbers between them
// such that each digit of the number is even. The numbers obtained should be printed in a comma-
// separated sequence on a single line.

function evenDigits(min, max){
    let result = [];

    for (let i=min; i<=max; i++){
        let flag = true;
        for (let j=0; j<String(i).length; j++){
            if (Number(String(i)[j]) % 2===0 && j <= String(i).length && flag == true) flag = true;
            else  flag = false;
        }
        if (flag) result.push(i);
    }
    return result.length === 0 ? 'Such numbers does not exist.' : result;
}

console.log(evenDigits(19, 42));
console.log(evenDigits(99, 199));
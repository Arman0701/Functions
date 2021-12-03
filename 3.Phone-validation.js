'use strict'

// Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

// If the phone number is less than 10 digits assume that it is a bad number
// If the phone number is longer than 10, then it is a bad number
// If the phone number is 10 digits assume that it is good
// If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
// and return remaining 10 digits.
// If the phone number contains + symbol more than one, consider it as a bad number.
// If the phone number contains + symbol not as the first character, consider it as a bad number.

function validate(number){
    let strNum = number.split('');

    for (let i=0; i<strNum.length; i++){
        if (strNum[0] === '+' || strNum[i] === ' ') strNum.splice(i, 1);
        if (strNum[i] === "+" && i>0) return "Bad number";
    }
    if (strNum.length !== 10) return "Bad number"

    return strNum.join('');
}

console.log(validate("455678"));
console.log(validate("339 5656888"));
console.log(validate("+0008989562"));
console.log(validate("45231489562"));
console.log(validate("123+2356897452"));
'use strict'

// Write a function which receives an array and a number as arguments and returns a new array from
// the elements of the given array which are larger than the given number.

function biggerThan(given, numbers ){
    let result = numbers.filter(function (x){return x > given});
    if (result.length === 0) return 'Such values do not exist.';
    return result;
}

console.log(biggerThan(16, [10, 25, 16, -5, 30, 15, 24]));
console.log(biggerThan(9, [1, 1, 2, -3, 0, 8, 4, 0]));
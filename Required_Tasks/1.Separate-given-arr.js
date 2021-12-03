'use strict'

// Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

function separate(arr){
    let odds = [];
    let evens = [];
    for (let i=0; i<arr.length; i++){
        arr[i] % 2===0 ? evens.push(arr[i]) : odds.push(arr[i]);
    }
    return JSON.stringify({"odds": odds, "evens": evens})
}

console.log(separate([45,17,3,6,17,0]));
console.log(separate([1,3,5,9]));
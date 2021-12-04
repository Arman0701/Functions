'use strict'

// Given a word and a list of possible anagrams, select the correct sub list.

function checking(word, arr){
    let result =[];

    for(let i=0;i<arr.length;i++){
        if(anagrams(word,arr[i])) result.push(arr[i]);
    }
    function anagrams(stringA, stringB) {
        return cleanString(stringA) === cleanString(stringB);
    }
    
    function cleanString(str) {
        return str.replace(/[^\w]/g).toLowerCase().split('').sort().join();
    } 
    return result 
}

console.log(checking("listen", ["enlists", "google", "inlets", "banana"]));
console.log(checking("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]));
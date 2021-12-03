'use strict'

// Write a function that accepts a string(a sentence) as a parameter and finds the longest word within
// the string. If there are several words which are the longest ones, print the last word(words can be
// separated by space, comma or hyphen).

function lengthOf(sentence){
    let splitted =  sentence.split(' ');
    let max_l = splitted[0].length;
    let longest = '';
    for (let i=0; i<splitted.length; i++){
        if (splitted[i].length > max_l){
            max_l = splitted[i].length;
            longest = splitted[i];
        }
    }
    if (/[.,-?]$/.test(longest)) return longest.substring(0, longest.length-1);

    return longest
}

console.log(lengthOf('A revolution without dancing is a revolution not worth having.'));
console.log(lengthOf('Which would be worse - to live as a monster, or to die as a good man?'));
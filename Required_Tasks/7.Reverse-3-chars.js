'use strict'

// Write a function to compute a new string from the given one by moving the first char to come after
// the next two chars, so "abc" yields "cab". Repeat this process for each subsequent group of 3 chars.
// Ignore any group of fewer than 3 chars at the end.

function rev3chars(str){
    let splitted = [];

    for (let i=0; i<str.length; i+=3){
        splitted.push(str.slice(i, i+3))
    }
    for (let k=0; k<splitted.length; k++){
        splitted[k] = splitted[k].split('').reverse().join('');
    }

    return splitted.join('');
}

console.log(rev3chars('dfgjkloyp'));
console.log(rev3chars('aweyoolp'));
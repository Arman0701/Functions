'use strict'

// Write a function which receives two strings and removes appearances of the second string from the first one.

function remove(sentence, str){
    return sentence.replaceAll(str, '');
}

console.log(remove('This is some text.', 'is'));
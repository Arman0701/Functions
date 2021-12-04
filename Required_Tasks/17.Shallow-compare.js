'use strict'

// Given two objects. Write a function that performs shallow compare.

function shallowCompare(a, b){
    let keys1 = Object.keys(a);
    let keys2 = Object.keys(b);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (a[key] !== b[key]){
            return false;
        }
    }

    return true;
}

console.log(shallowCompare({a: '1'}, {a: '1'}));
console.log(shallowCompare({a: '1'}, {a: '1', b: '2'}));
console.log(shallowCompare({}, {}));
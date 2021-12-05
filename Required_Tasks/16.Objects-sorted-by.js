'use strict'

// Given the list of the following readers:

// [
//    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
//    { book: "Animal Farm", readStatus: true, percent: 20 },
//    { book: "Solaris", readStatus: false, percent: 90 },
//    { book: "The Fall", readStatus: true, percent: 50 },
//    { book: "White Nights", readStatus: false, percent: 60 },
//    { book: "After Dark", readStatus: true, percent: 70 },
// ];

// Output the books sorted by the percent in descending order which readStatus is true.

function arrSorting(array){
    let sorted = [];
    let filtered = [];
    for (let obj of array){
        sorted[obj.percent] = obj;
    }
    for (let i=0; i<sorted.length; i++){
        if (sorted[i] !== undefined) filtered.push(sorted[i]);
    }

    return filtered;
}

let result = [];

function sortingObjects(objects_array){
    for (let obj of objects_array){
        if (obj.readStatus) result.push(obj);
    }

    return arrSorting(result);
}

console.log(sortingObjects([
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
]));
'use strict'

// Write a function, which receives an array as an argument which elements arrays of numbers. Find
// product of biggest negative number of each array. If there is not any negative number, ignore that
// array. Check that items of the given array are arrays.

function negProd(arr){
    let prod = 1;
    for (let i=0; i<arr.length; i++){
        if (!(arr[i] instanceof Array)) return 'Invalid Argument'
        let negatives = arr[i].filter(x => x<0);
        if (negatives.length === 0) negatives.push(1);
        prod *= Math.max(...negatives);
    }
    return prod == 1 ? 'No negatives' : prod; 
}

console.log(negProd([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));
console.log(negProd([[3, 4], [11, 0], [5, 6, 7, 8]]));
console.log(negProd([1, 2, 3]));
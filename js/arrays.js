"use strict";

const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.forEach (function(item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`)
// });


// arr.pop();
// arr.push(13);
// console.log(arr);

// arr[95] = 6;
// console.log(arr.length); // counts last index number + 1
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // for array, strings, map and set
// //we can use break and continue here
// for (let value of arr) {
//     console.log(value);
// }

const str = prompt ("", "");
const products = str.split(", ");
console.log(products);
products.sort(); // can be applyed for Strings ONLY or add compareNum function for integers
console.log(products.join)('; ');
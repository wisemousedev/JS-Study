"use strict";

const options = {
    name: 'test',
    with: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

/* object destructuring */
const{border, bg} = options.colors;
console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);

/* FOR EACH */
// for (let key in options) {
//     console.log(`Property ${key}, has value ${options[key]}`);
// }

/* FOR EACH in case of object in object*/
/* for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]) {
            console.log(`Property ${i}, has value ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key}, has value ${options[key]}`);
    } 
} */


/* Count all properties */
/*
let count = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]) {
            console.log(`Property ${i}, has value ${options[key][i]}`);
            count++;
        }
    } else {
        console.log(`Property ${key}, has value ${options[key]}`);
        count++;
    } 
}
console.log(count);
*/

/* Count main lvl properties */
//console.log(Object.keys(options).length);


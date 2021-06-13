"use strict";
let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

/*
const copy = obj; // NOT A COPY. Just Assigned link to first object 

copy.a = 10;

console.log(copy);
console.log(obj);
*/

// Copy method #1
function copy(mainObj) { // copy only for 1st lvl members. Object inside an object will remain as a link
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// add object inside another object
//console.log(Object.assign(numbers, add)); 

// Copy method #2
// create new copy object
const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

// Copy method #3
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'testString';

console.log(oldArray);
console.log(newArray);


// Copy method #4  ( ES6-ES8) using spread

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'facebook', 'vk'];

      console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const stream = ['link', 'picture', 'author'];

log(...stream);

const testArray = ["a", "b"];

const testArray2 = [...testArray];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};


"use strict";

function hello() {
    console.log("Hello World");
    debugger;
}

hello();

function hi() {
    console.log("Sat hi!");
}

hi();

const arr = [1, 14, 4, 30, 54],
    sorted = arr.sort(CompareNum);

function CompareNum(a, b) {
    return a - b;
}
const { lol, sum} = require('./sum'); // either you can put sum.js or sum , it always serve as .js
const {substraction, printName} = require('./substraction.js'); // either you can put sum.js or sum , it always serve as .js
// console.log(x);

var x = 40; // this will give error cause lol has been already declared in ./sum.js
console.log(x);

let getSum = sum(5,6);
console.log(getSum);


console.log(printName("javscript is a beautiful language."));

console.log(substraction(5,6));

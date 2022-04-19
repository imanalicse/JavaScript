/**
 * Destructuring assignment is a special syntax that allows us to unpack values from arrays,
 * or properties from objects, into distinct variables.
 */

let a, b, rest;
[a, b] = [10, 20];
console.log(a); // expected output: 10
console.log(b); // expected output: 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // expected output: Array [30,40,50]

//Default values
let a, b;
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

//Object destructuring
const user = {
    id: 42,
    isVerified: true
};
const {id, isVerified} = user;
console.log(id); // 42
console.log(isVerified); // true

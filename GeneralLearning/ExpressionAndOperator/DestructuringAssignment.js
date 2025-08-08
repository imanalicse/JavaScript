/**
 * The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays
 * or properties from objects, into distinct variables.
 */

let a, b, rest;
[a, b] = [10, 20];
console.log(a); // expected output: 10
console.log(b); // expected output: 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // expected output: Array [30,40,50]

//Default values
let x, y;
[x=5, y=7] = [1];
console.log(x); // 1
console.log(y); // 7

console.warn('Object destructuring')
const person = {
    id: 42,
    isVerified: true
};
const { id: id_number, isVerified } = person;
console.log(id_number); // 42
console.log(isVerified); // true

console.warn('Unpacking properties from objects passed as a function parameter');

const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function userInfo({id, displayName: dname, fullName: {firstName: name}}) {
    console.log(`${id} : ${dname} is ${name}`);
}
userInfo(user);

console.warn('Setting a function parameter\'s default value');
function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
  console.log(size, coords, radius);
}

drawChart({
  coords: {x: 18, y: 30},
  radius: 30
});

console.warn('Computed object property names and destructuring');
let key = 'z';
let {[key]: foo} = {z: 'bar'};
console.log(foo); // "bar"

console.warn('Combined Array and Object Destructuring');
const props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];
const [,, { name }] = props;
console.log(name); // "FizzBuzz"

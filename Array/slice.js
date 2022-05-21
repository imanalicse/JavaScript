/**
The slice() method returns a shallow copy of a portion of an array into a new array object selected from
start to end (end not included) where start and end represent the index of items in that array.
The original array will not be modified.
Syntax:
slice()
slice(start)
slice(start, end)
*/
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // ["camel", "duck"]
console.log(animals.slice(-2)); // ["duck", "elephant"]
console.log(animals.slice(2, -1)); // ["camel", "duck"]
console.log(animals.slice()); // ["ant", "bison", "camel", "duck", "elephant"]

//TODO




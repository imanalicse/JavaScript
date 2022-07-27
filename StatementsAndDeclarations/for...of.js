/**
The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array,
array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

Syntax:
for (variable of iterable) {
  statement
}
*/

// Iterating over an Array

let iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value);
}

//Iterating over a String
iterable = 'boo';
for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"

// Iterating over a Map
iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const [key, value] of iterable) {
  console.log(key + ": " + value);
}

//Iterating over a Set
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}

// TODO

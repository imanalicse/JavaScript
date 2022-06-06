/**
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
Syntax:
indexOf(searchElement)
indexOf(searchElement, fromIndex)
*/
const animals = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(animals.indexOf('bison')); // 1
console.log(animals.indexOf('bison', 2)); // 4
console.log(animals.indexOf('giraffe')); // -1

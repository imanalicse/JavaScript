/**
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
Syntax:
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, ... , elementN)
*/

const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5)); // 5
console.log(array1); // [4, 5, 1, 2, 3]

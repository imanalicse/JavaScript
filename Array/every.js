/**
The every() method tests whether all elements in the array pass the test implemented by the provided function.
It returns a Boolean value.
Syntax:
every((element, index, array) => {  } )
every(function(element, index, array) {  }, thisArg)
*/
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // expected output: true




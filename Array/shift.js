/**
The shift() method removes the first element from an array and returns that removed element.
This method changes the length of the array.

Array.prototype.pop() has similar behavior to shift, but applied to the last element in an array.
*/

const array1 = [1, 2, 3];
console.log('original_data', [1, 2, 3])
const firstElement = array1.shift();
console.log(array1); // [2, 3]
console.log(firstElement); // 1

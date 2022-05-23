/**
The Array.isArray() method determines whether the passed value is an Array.
Syntax:
Array.isArray(value)
*/

Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false

/** instanceof vs isArray
When checking for Array instance, Array.isArray is preferred over instanceof because it works through iframes.
*/

const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
const arr = new xArray(1,2,3); // [1,2,3]
console.log(arr)

// Correctly checking for Array
console.log('isArray(arr)', Array.isArray(arr));  // true
// Considered harmful, because doesn't work through iframes
console.log('instanceof of arr', arr instanceof Array); // false




/**
The join() method creates and returns a new string by concatenating all of the elements in an array
(or an array-like object), separated by commas or a specified separator string.
If the array has only one item, then that item will be returned without using the separator.

Syntax:
join()
join(separator)
*/

const a = ['Wind', 'Water', 'Fire'];
console.log(a.join(", ")); // 'Wind, Water, Fire'

// Joining an array-like object

function f(a, b, c) {
  console.log(arguments)
  const s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
//expected output: "1,a,true"

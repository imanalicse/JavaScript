/**
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
Syntax:
// Arrow function
Array.from(arrayLike, (element) => {  } )
Array.from(arrayLike, (element, index) => {  } )
*/

/** Array from a String */
Array.from('foo'); // [ "f", "o", "o" ]

/** Array from a Set */
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set); // [ "foo", "bar", "baz" ]

//TODO



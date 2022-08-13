/**
 * The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
 * slice(indexStart)
 * slice(indexStart, indexEnd)
 */

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

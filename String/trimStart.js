/**
The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
Syntax:
trimStart()
trimLeft()
*/
const greeting = '   Hello world!   ';
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trimStart());
// expected output: "Hello world!   ";


/**
The trim() method removes whitespace from both ends of a string and returns a new string,
without modifying the original string. Whitespace in this context is all the whitespace
characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
Syntax:
trim()
*/
const greeting = '   Hello world!   ';
console.log(greeting); // expected output: "   Hello world!   ";
console.log(greeting.trim()); // expected output: "Hello world!";

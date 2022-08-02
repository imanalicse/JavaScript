/**
The includes() method performs a case-sensitive search to determine whether
one string may be found within another string, returning true or false as appropriate.
Syntax:
includes(searchString)
includes(searchString, position)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false

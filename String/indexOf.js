/**
The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and
returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method
returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

Syntax:
indexOf(searchString)
indexOf(searchString, position)

Return value:
The index of the first occurrence of searchString found, or -1 if not found.
*/

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm); // 40

// Checking occurrences
if('Blue Whale'.indexOf('Blue') !== -1) { }
/**
 The replace() method of String values returns a new string with one, some, or all matches of
 a pattern replaced by a replacement. The pattern can be a string or a RegExp,
 and the replacement can be a string or a function called for each match.
 If pattern is a string, only the first occurrence will be replaced.
 The original string is left unchanged.

 Syntax: replace(pattern, replacement) -> pattern - string or RegExp, replacement - string or function
 */

let person = '{"name":"Iman\nAli", "address_1":"West shewrapara\\nMirpur","city":"Dhaka \n north"}';
let regex = /(?<!\\)\n/g; // Negative lookbehind - Matches "\n" only if "\n" is not preceded by "\".
person = person.replace(regex, "\\n") // Solution of parse - Uncaught SyntaxError: Bad control character in string literal in JSON at position 13 (line 1 column 14)
person = JSON.parse(person)
console.log(person)

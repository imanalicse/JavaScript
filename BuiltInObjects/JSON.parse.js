/**
The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

Syntax:
JSON.parse(text)
JSON.parse(text, reviver)
*/
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj.count); // 42
console.log(obj.result); // true

// TODO - Continue
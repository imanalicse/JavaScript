/**
The Object.values() method returns an array of a given object's own enumerable property values,
in the same order as that provided by a for...in loop. (The only difference is that a for...in loop
enumerates properties in the prototype chain as well.)
Syntax: Object.values(obj)
 */

const obj = { foo: 'bar', baz: 42};
console.log(Object.values(obj)); // ['bar', 42]

console.info("non-object argument will be coerced to an object")
console.log(Object.values('foo')); // ['f', 'o', 'o']
// continue
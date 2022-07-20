/**
 The Object.fromEntries() method transforms a list of key-value pairs into an object.

 Syntax:
 Object.fromEntries(iterable);
 Object.fromEntries() performs the reverse of Object.entries()
 */

// Converting a Map to an Object
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
let obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

// Converting an Array to an Object
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }

// Object transformations
const object1 = { a: 1, b: 2, c: 3 };
const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);
console.log(object2); // { a: 2, b: 4, c: 6 }

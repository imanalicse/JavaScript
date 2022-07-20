/**
 The Object.keys() method returns an array of a given object's own enumerable property names,
 iterated in the same order that a normal loop would.
 Syntax:
 Object.keys(obj)
 */

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.keys(object1));// ["a", "b", "c"]
/**
 * The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
 * It returns the modified target object.
 * Properties in the target object are overwritten by properties in the sources if they have the same key.
 * Later sources' properties overwrite earlier ones.
 */

//Syntax: Object.assign(target, ...sources)

const o1 = { a: 1, b: 2 };
const o2 = { b: 4, c: 5 };

console.warn("Merging objects");
const mergedO1 = Object.assign(o1, o2);
console.log(mergedO1); // { a: 1, b: 4, c: 5 }
console.log(o1); // { a: 1, b: 4, c: 5 } - target object itself is changed.

console.warn("Merging objects with same properties");
const o3 = { c: 3 };
const mergedO2 = Object.assign({}, o2, o3);
console.log(mergedO2); // { b: 4, c: 3 }
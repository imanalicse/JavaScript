/**
 * The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
 * This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.
 */

const personObj = {
  name: 'John Doe',
  age: 40
};
console.log(Object.entries(personObj));

console.warn("Iterating through an Object");
for (const [key, value] of Object.entries(personObj)) {
  console.log(`${key}: ${value}`);
}
console.log("---------------");
Object.entries(personObj).forEach(([key, value]) => console.log(`${key}: ${value}`));

console.warn("Converting an Object to a Map");
const map = new Map(Object.entries(personObj));
console.log(map);
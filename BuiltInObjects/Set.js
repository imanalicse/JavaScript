/**
The Set constructor lets you create Set objects that store unique values of any type,
whether primitive values or object references.
Syntax:
new Set()
new Set(iterable)
*/

const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1.has(1)); // true
console.log(set1.has(5)); // true
console.log(set1.has(6)); // false

let mySet = new Set()
mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
let o = {a: 1, b: 2}
mySet.add(o)
console.log(mySet)

for (const value of mySet) {
  console.log(value);
}
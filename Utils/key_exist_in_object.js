// Check if a Key exists in an Object with the in Operator
const person = {
  name: 'John',
};
console.log('name' in person); //️ true
console.log('age' in person); // false

// Check if a Key exists in an Object with Object.hasOwnProperty
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // false

// Check if a Key exists in an Object with Optional Chaining
console.log(person?.name); // John
console.log(person?.age); // undefined
if (person?.name !== undefined) {
  // the key exists on the object
}
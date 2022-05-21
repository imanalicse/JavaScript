/**
The push() method adds one or more elements to the end of an array and returns the new length of the array.
Syntax:
push(element0, element1,  ... , elementN)
*/
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);                         // expected output: 4
console.log(animals);                       // ["pigs", "goats", "sheep", "cows"]
animals.push('chickens', 'cats', 'dogs');
console.log(animals);                       // ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//TODO




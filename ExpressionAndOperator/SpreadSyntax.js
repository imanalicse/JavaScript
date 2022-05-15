/**
  Spread syntax (...) allows an iterable such as an array expression or string to be expanded
  in places where zero or more arguments (for function calls) or elements (for array literals) are expected,
  or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

  Syntax:
  For function calls:
  myFunction(...iterableObj); // pass all elements of iterableObj as arguments to function myFunction

  For array literals:
  [...iterableObj, '4', 'five', 6]; // combine two arrays by inserting all elements from iterableObj

  For object literals (new in ECMAScript 2018):
  let objClone = { ...obj }; // pass all key:value pairs from an object
*/

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log('...numbers', ...numbers)
console.log(sum.apply(null, numbers)); // expected output: 6
console.log(sum(...numbers)); // expected output: 6  and replace apply

/** Spread in array literals */
let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [20, ...numberStore, newNumber];
console.log('numberStore', numberStore)

/** Spread in object literals */
const visibleConfigs = { isVisible: 'config.isVisible', isNotVisible: 'config.isNotVisible' }
const filed_configs = { value: 'attrs.value', checked: 'attrs.checked', ...visibleConfigs }
console.log('filed_configs', filed_configs);

/** Only for iterables
Spread syntax (other than in the case of spread properties) can only be applied to
iterable objects like Array, or with iterating functions such as map(), reduce(), and assign().
*/

let obj = {'key1': 'value1'};
let array = [...obj]; // TypeError: obj is not iterable,
// To use spread syntax with these objects, you will need to provide an iterator function.

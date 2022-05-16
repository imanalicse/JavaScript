/**
The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
in order, passing in the return value from the calculation on the preceding element.
The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation".
If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used
as the initial value and iteration starts from the next element (index 1 instead of index 0).

Syntax:
reduce(callbackFn)
reduce(function(previousValue, currentValue, currentIndex, array) { }, initialValue)
reduce((previousValue, currentValue, currentIndex, array) => { }, initialValue)
*/

console.warn("How reduce() works without an initial value");
const array = [15, 16, 17, 18, 19];
function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}
array.reduce(reducer);

console.warn("How reduce() works with an initial value");
array.reduce( (previous, current, index, array) => {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}, 10 )

/** Sum all the values of an array */
let sum = [0,1,2,3].reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
console.log('Sum of array: ' + sum);

/** Grouping objects by a property */
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj);
    return acc;
  }, {})
}

let groupedPeople = groupBy(people, 'age')
console.warn('Grouping objects by a property', groupedPeople)
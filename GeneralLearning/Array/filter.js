/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 * filter(function(element, index, array) {  }, thisArg)
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

console.warn("Filtering invalid entries from JSON")
let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]
function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  }
  return false;
}
//let arrByID = arr.filter(filterByID)
let arrByID = arr.filter(item => (Number.isFinite(item.id) && item.id !== 0));
console.log(arrByID)

console.warn("Searching in array");
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const filterFruits = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
};
console.log(filterFruits(fruits, 'ap')); // ['apple', 'grapes']
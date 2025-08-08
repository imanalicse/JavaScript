/**
The map() method creates a new array populated with the results of calling
a provided function on every element in the calling array.

Syntax:
map((element, index, array) => { })
map(function(element, index, array) {  }, thisArg)
*/

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1); // [2, 8, 18, 32]

/** Using map to reformat objects in an array */
const kvArray = [{ key: 1, value: 10 },
                 { key: 2, value: 20 },
                 { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({key, value}) => ({[key]: value}));
console.log('reformattedArray', reformattedArray)
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

// TODO




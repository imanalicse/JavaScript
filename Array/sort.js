/**
The sort() method sorts the elements of an array in place and returns the sorted array.
The default sort order is ascending, built upon converting the elements into strings,
then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

Syntax:
sort()
sort((a, b) => {  })
*/

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log('months', months); // ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log('array1', array1); // [1, 100000, 21, 30, 4]

const array2 = [1, 30, 4, 21, 100000];
array2.sort((a, b) => a - b); // accessing order
console.log('array2', array2); // [1, 4, 21, 30, 100000]

const array3 = [1, 30, 4, 21, 100000];
array3.sort((a, b) => b - a); // descending order
console.log('array3', array3); // [100000, 30, 21, 4, 1]

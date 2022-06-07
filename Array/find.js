/**
The find() method returns the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned.
Syntax:
find((element, index, array) => {  } )
find(function(element, index, array) {  }, thisArg)
*/

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found); // 12

//TODO Continue


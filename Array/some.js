/**
The some() method tests whether at least one element in the array passes the test implemented by the provided function.
It returns true if, in the array, it finds an element for which the provided function returns true;
otherwise it returns false. It doesn't modify the array.
Syntax:
some((element, index, array) => {  } )
some(function(element, index, array) {  }, thisArg)
*/
const numbers = [1, 2, 3, 6, 5];
const hasEven = numbers.some((element) => element % 2 === 0);
console.log('hasEven', hasEven); //true

/** Checking whether a value exists in an array */
function checkAvailability(arr, val) {
    return arr.some(item => item === val);
}
const fruits = ['apple', 'banana', 'mango', 'guava'];
const in_array = checkAvailability(fruits, 'banana');
console.log('in_array', in_array)



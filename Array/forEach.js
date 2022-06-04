/**
The forEach() method executes a provided function once for each array element.
Syntax:
forEach((element, index, array) => { ... })
forEach(function(element, index, array) { ... }, thisArg)

Note: There is no way to stop or break a forEach() loop other than by throwing an exception.

Note: forEach expects a synchronous function.
forEach does not wait for promises.
Make sure you are aware of the implications while using promises (or async functions) as forEach callback.

*/

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = ((a, b) => {
    //setTimeout(() => {
        console.log(' setTimeout ')
        return a + b;
    // }, 1000);
});

ratings.forEach( (rating) => {
    sum =  sumFunction(sum, rating);
});
console.log('sum = ' + sum);

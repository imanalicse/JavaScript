/**
The splice() method changes the contents of an array by removing or replacing existing elements and/or
adding new elements in place. To access part of an array without modifying it, see slice().
Syntax:
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
*/
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');     // inserts at index 1
console.log(months);                                // ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');     // replaces 1 element at index 4
console.log(months);                                // ["Jan", "Feb", "March", "April", "May"]

//TODO




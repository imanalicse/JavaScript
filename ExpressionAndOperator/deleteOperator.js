/**
The JavaScript delete operator removes a property from an object;
if no more references to the same property are held, it is eventually released automatically.

Syntax:
delete expression
Where expression should evaluate to a property reference, e.g.:

delete object.property
delete object['property']
*/

var Employee = {
  age: 38,
  name: 'Iman',
  designation: 'developer'
}
console.log(Employee);
console.log(delete Employee.designation);   // returns true
console.log(Employee);

// When trying to delete a property that does not exist, true is returned
console.log(delete Employee.salary); // returns true

/** Deleting array elements
When the delete operator removes an array element, that element is no longer in the array.
*/

// TODO - continue
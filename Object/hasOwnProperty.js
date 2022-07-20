/**
The hasOwnProperty() method returns a boolean indicating whether the object
has the specified property as its own property (as opposed to inheriting it).
Syntax:
hasOwnProperty(prop)

Note: Object.hasOwn() is recommended over hasOwnProperty(), in browsers where it is supported.
 */

 const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1')); // true
console.log(object1.hasOwnProperty('toString')); // false
console.log(object1.hasOwnProperty('hasOwnProperty')); // false

console.log('property1' in object1); // returns true

console.log('--------------');
let foo = {
  hasOwnProperty() {
    return false;
  },
  bar: 'Here be dragons'
};

console.log(foo.hasOwnProperty('bar')); // reimplementation always returns false
console.log(Object.hasOwn(foo, 'bar')); // solution use: Object.hasOwn

// Objects created with Object.create(null)
foo = Object.create(null);
foo.prop = 'exists';
foo.hasOwnProperty("prop");  // Uncaught TypeError: foo.hasOwnProperty is not a function
/**
 * The solutions in this case are the same as for the previous section: use Object.hasOwn() by preference,
 * otherwise use an external object's hasOwnProperty().
 */

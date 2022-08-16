/**
 * The Object.seal() method seals an object. Sealing an object prevents extensions and makes existing
 * properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added,
 * existing properties cannot be removed, their enumerability and configurability cannot be changed,
 * and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as
 * they are writable. seal() returns the same object that was passed in.
*
 * Object.seal(obj)
*/

const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33

// TODO

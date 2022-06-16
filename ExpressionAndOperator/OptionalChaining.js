/**
 The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of
 connected objects without having to check that each reference in the chain is valid.

 The ?. operator is like the . chaining operator, except that instead of causing an error if a
 reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.
 When used with function calls, it returns undefined if the given function does not exist.

 Optional chaining cannot be used on a non-declared root object, but can be used with an undefined root object.

Syntax:
    obj.val?.prop
    obj.val?.[expr]
    obj.arr?.[index]
    obj.func?.(args)
*/

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};
const dogName = adventurer.dog?.name;
console.log(dogName); // expected output: undefined
console.log(adventurer.someNonExistentMethod?.()); // expected output: undefined

/**
 * Optional chaining with expressions
 */
// continue
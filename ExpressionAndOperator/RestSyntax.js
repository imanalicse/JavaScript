/**
Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax.
Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements
and "condenses" them into a single element
*/

/** Rest parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
A function definition can have only one ...restParam
The rest parameter must be the last parameter in the function definition.
*/

/** The difference between rest parameters and the arguments object
1. The arguments object is not a real array, while rest parameters are Array instances,
meaning methods like sort, map, forEach or pop can be applied on it directly;
2. The arguments object has additional functionality specific to itself (like the callee property).
3. The ...restParam bundles all the extra parameters into a single array,
therefore it does not contain any named argument defined before the ...restParam.
Whereas the arguments object contains all of the parameters — including the parameters
in the ...restParam array — bundled into one array-like object.
*/

// From arguments to an array-
function normalParamFunc(a, b) {
  console.log("a", a)
  console.log("b", b)
  let normalArray = Array.prototype.slice.call(arguments)
  // -- or --
  let normalArray2 = [].slice.call(arguments)
  // -- or --
  let normalArray3 = Array.from(arguments)
  console.log(normalArray)
}
normalParamFunc("one", "two", "three", "four", "five", "six");

function restParamFunc(a, b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}
restParamFunc("one", "two", "three", "four", "five", "six")
// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array


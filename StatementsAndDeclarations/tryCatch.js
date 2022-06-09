/**
The try...catch statement marks a try block and a catch block.
If the code in the try block throws an exception then the code in the catch block will be executed.

Syntax:
try {
  try_statements
}
catch (exception_var) {
  catch_statements
}
finally {
  finally_statements
}

*/

try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
console.log("After exception")

//TODO - continue
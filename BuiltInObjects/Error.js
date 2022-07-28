/**
The Error constructor creates an error object.
Syntax:
new Error()
new Error(message)
new Error(message, options)
new Error(message, fileName)
new Error(message, fileName, lineNumber)
*/

const x = Error('I was created using a function call!')
console.log(x)
// above has the same functionality as following
const y = new Error('I was constructed via the "new" keyword!')

try {
  frameworkThatCanThrow();
} catch (err) {
  console.log(err)
  throw new Error('New error message', { cause: err });
}


console.log("hello")

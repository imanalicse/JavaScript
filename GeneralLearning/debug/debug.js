
function sum(a, b) {
  let result = a + b; // DevTools pauses on this line.
  return result;
}

debugger;

console.log(sum(1, 3));

var a = 2;
var b = 4;
//Exception breakpoints
//throw "whoops";


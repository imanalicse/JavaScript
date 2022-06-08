/**
The JSON.stringify() method converts a JavaScript object or value to a JSON string,
optionally replacing values if a replacer function is specified or optionally including only the
specified properties if a replacer array is specified.

Syntax:
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
*/

console.log(JSON.stringify({ x: 5, y: 6 })); // "{"x":5,"y":6}"
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)])); // "[3,"false",false]"
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] })); // "{"x":[10,null,null,null]}"
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))); // ""2006-01-02T15:04:05.000Z""

// TODO - Continue
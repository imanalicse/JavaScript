/**
The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code;

Syntax:
[rv] = await expression

Return value:
A Promise which will be resolved with the value returned by the async function,
or rejected with an exception thrown from, or uncaught within, the async function.
*/

/** If the Promise is rejected, the rejected value is thrown.  */

async function f4() {
  try {
    var z = await Promise.reject(30);
  } catch(e) {
    console.error(e); // 30
  }
}

f4();
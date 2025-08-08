/**
The export statement is used when creating JavaScript modules to export live bindings to functions,
objects, or primitive values from the module so they can be used by other programs with the import statement.
There are two types of exports:
        1. Named Exports (Zero or more exports per module)
        2. Default Exports (One per module)
*/
// Named exports:
const func1 = ()=> {}
let myVariable;
export { func1 }; // export features declared earlier
export function myFunction() {} // export individual features (can export var, let, const, function, class)

// Default exports:
export { func1 as default }; // export feature declared earlier as default
export default function () { /* ... */ } // export individual features as default
export default class { }

/**
    You can have multiple named exports per module but only one default export
    Named exports are useful to export several values.
    During the import, it is mandatory to import them within curly braces with the same name of the corresponding object.
    But a default export can be imported with any name
    You can also rename named exports to avoid naming conflicts:
 */
export { myFunction as function1, myVariable as variable };

// Re-exporting / Aggregating
// export { default as function1, function2 } from 'bar.js';
// import DefaultExport from 'bar.js';
// export { default as DefaultExport } from 'bar.js';

// Using export from
/**
In childModule1.js
let myFunction = ...; // assign something useful to myFunction
let myVariable = ...; // assign something useful to myVariable
export {myFunction, myVariable};

In childModule2.js
let myClass = ...; // assign something useful to myClass
export myClass;

In parentModule.js
Only aggregating the exports from childModule1 and childModule2 to re-export them
export { myFunction, myVariable } from 'childModule1.js';
export { myClass } from 'childModule2.js';

In top-level module
We can consume the exports from a single module since parentModule "collected"/"bundled" them in a single source
import { myFunction, myVariable, myClass } from 'parentModule.js'
 */

function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getPost(url, callback) {
   getJSON(url, data => callback(JSON.parse(data)));
}

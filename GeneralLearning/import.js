/**
The static import statement is used to import read-only live bindings which are exported by another module.

Syntax
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
 */

// Import an entire module's contents
/**
The export parameters specify individual named exports, while the import * as name syntax imports all of them
import * as myModule from '/modules/my-module.js';
myModule.doAllTheAmazingThings();
*/
/**
import {foo, bar} from '/modules/my-module.js'; // Import a single export from a module
import {foo, bar} from '/modules/my-module.js'; // Import multiple exports from module
 */

/**
Import an entire module for side effects only, without importing anything.
This runs the module's global code, but doesn't actually import any values.

import '/modules/my-module.js';

This works with dynamic imports as well:
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import('/modules/my-module.js');
  }
})();
*/

import getPost from './export';

getPost("https://jsonplaceholder.typicode.com/posts", data => {
  console.log(data);
})

// Continue



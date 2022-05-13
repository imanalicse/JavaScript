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
// Import a single export from a module
// import {foo, bar} from '/modules/my-module.js';

// Continue



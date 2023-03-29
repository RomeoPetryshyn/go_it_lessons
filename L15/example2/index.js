// IMPORT FROM LIBRARY. TYPE - COMMONJS
const _ = require('lodash');
console.log(_.add(1, 2));

// IMPORT FROM LIBRARY. TYPE - MODULE
// import _ from "lodash";
// console.log(_.add(1, 2));

// === NAMED IMPORT ===
// import * as addSomething from './src/add_something.js';

// console.log(addSomething.addSomething1(5, 7));
// console.log(addSomething.addSomething2(3, 4));

// import { addSomething1, addSomething2 } from "./src/add_something.js";
// console.log(addSomething1(5, 7));
// console.log(addSomething2(3, 4));
// === =========== ===

// === DEFAULT IMPORT ===
// import subtractSomething from "./src/substract_something.js";
// import { addSomething1, addSomething2 } from "./src/add_something.js";
// console.log(addSomething1(5, 7));
// console.log(addSomething2(3, 4));
// console.log(subtractSomething(5, 3));
// === =========== ===

// import something from "./src/something/something";
// something(1, 2);



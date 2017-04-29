
// https://git-scm.com/download/win

// https://github.com/UncommonConcept/learn-frontend-in-48-hours


// ========================//
// || ---- MODULES ---- || //
// ========================//
// math.js
export function sum (x, y) { return x + y }
export var pi = 3.141593
export var other = function (x) { pi(x) }
export default { a: 1 };

//  otherApp.js
import sergio, { sum, pi } from "./math";
console.log("2π = " + sum(pi, pi));

// /-- IN ES5: --\ //
//  math.js
LibMath = {};
LibMath.sum = function (x, y) { return x + y };
LibMath.pi = 3.141593;

var LibMath = (return LibMath)();

//  otherApp.js
var sum = LibMath.sum, pi = LibMath.pi;
console.log("2π = " + sum(pi, pi));

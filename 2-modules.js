// ========================//
// || ---- MODULES ---- || //
// ========================//
// math.js
export function sum (x, y) { return x + y }
export var pi = 3.141593

//  otherApp.js
import { sum, pi } from "./math";
console.log("2π = " + sum(pi, pi));

// /-- IN ES5: --\ //
//  math.js
LibMath = {};
LibMath.sum = function (x, y) { return x + y };
LibMath.pi = 3.141593;

//  otherApp.js
var sum = LibMath.sum, pi = LibMath.pi;
console.log("2π = " + sum(pi, pi));

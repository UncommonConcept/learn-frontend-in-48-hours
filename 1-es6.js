// ==========================//
// || ---- CONSTANTS ---- || //
// ==========================//
const PI = 3.141593;

// /-- IN ES5: --\ //
var PI = 3.141593;

// OR:
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
  value: 3.141593,
  enumerable: true,
  writable: false,
  configurable: false
});


// ==============================//
// || ---- BLOCK SCOPING ---- || //
// ==============================//
let a = [1, 2, 3];
for (let i = 0; i < a.length; i++) {
  let x = a[i];
}
console.log(x); // exception: x is undefined

let callbacks = [];
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2 };
}
console.log(callbacks);

// /-- IN ES5: --\ //
var callbacks = [];
for (var i = 0; i <= 2; i++) {
  (function (i) {
    callbacks[i] = function () { return i * 2; };
  })(i);
}


// ================================//
// || ---- ARROW FUNCTIONS ---- || //
// ================================//
const events = [0, 2, 4, 6, 8, 10];
const odds = evens.map(v => v + 1);
console.log(odds);

// Lexical scoping of the `this` object
this.nums.forEach((v) => {
  if (v % 5 === 0) {
    this.fives.push(v);
  }
}):

// /-- IN ES5: --\ //
var odds = evens.map(function (v) { return v + 1; });

var self = this;
this.nums.forEach(function (v) {
  if (v % 5 === 0)
    self.fives.push(v);
});

// OR (since ES5 only):
this.nums.forEach(function (v) {
  if (v % 5 === 0)
    this.fives.push(v);
}.bind(this));


// ===================================//
// || ---- DEFAULT PARAMETERS ---- || //
// ===================================//
function f (x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50

// /-- IN ES5: --\ //
function f (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
f(1) === 50;


// ================================//
// || ---- SPREAD OPERATOR ---- || //
// ================================//
const params = [ "hello", true, 7 ]
const other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

const str = "foo"
const chars = [ ...str ] // [ "f", "o", "o" ]

const obj = { a: 1, b: 2 }
const obj2 = { c: 3, ...obj }

// /-- IN ES5: --\ //
var params = [ "hello", true, 7 ];
var other = [ 1, 2 ].concat(params); // [ 1, 2, "hello", true, 7 ]

var str = "foo";
var chars = str.split(""); // [ "f", "o", "o" ]


// =================================//
// || ---- TEMPLATE STRINGS ---- || //
// =================================//
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

// /-- IN ES5: --\ //
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\n"
              + "want to buy " + card.amount + " " + card.product + " for\n"
              + "a total of " + (card.amount * card.unitprice) + " bucks?";


// =================================//
// || ---- OBJECT SHORTHAND ---- || //
// =================================//
const x = 3, y = 5;
const obj = { x, y };

// /-- IN ES5: --\ //
var obj = { x: x, y: y };


// ====================================//
// || ---- COMPUTED PROPERTIES ---- || //
// ====================================//
let obj = {
    foo: "bar",
    [ "baz" + quux() ]: 42
};

// /-- IN ES5: --\ //
var obj = {
    foo: "bar"
};
obj[ "baz" + quux() ] = 42;


// ==================================//
// || ---- METHOD PROPERTIES ---- || //
// ==================================//
obj = {
    foo (a, b) {
    },

    bar (x, y) {
    },

    *quux (x, y) {
        …
    }
}

// /-- IN ES5: --\ //
obj = {
    foo: function (a, b) {
    },
    bar: function (x, y) {
    },
    //  quux: no equivalent in ES5
};


// ==============================//
// || ---- DESTRUCTURING ---- || //
// ==============================//

// ARRAYS
const list = [ 1, 2, 3 ]
const [ a, b ] = list; // You can extract values
[ b, a ] = [ a, b ]; // And you can swap array values.

// /-- IN ES5: --\ //
var list = [ 1, 2, 3 ];
var a = list[0],
    b = list[2];
var tmp = a; a = b; b = tmp;


// OBJECTS
const obj = { a: 1, b: 2, c: { d: 5 } };
const { a, b, c: { d }, e = 5 } = obj;
// Note: The combinatorial here means that you actually have 4x4 statements to test!

// /-- IN ES5: --\ //
var obj = { a: 1, b: 2 };
var a = obj.a;
var b = obj.b;
var d = obj.c.d;
var e = obj.e === undefined ? 5 : obj.e;


// FUNCTIONS
function f ([ name, val ]) {
    console.log(name, val);
}
function h ({ name, val = 5, val2 = 3 } = {}) {
// function h (args) {
//   const { name, val } = args;
//   // var name = args.name;
    console.log(name, val);
}
h();

// /-- IN ES5: --\ //
function f (arg) {
    var name = arg[0];
    var val  = arg[1];
    console.log(name, val);
};

function h (arg) {
    var name = arg.name;
    var val  = arg.val;
    console.log(name, val);
};


// ========================//
// || ---- CLASSES ---- || //
// ========================//
class Shape {
  static x;

    constructor (id, x, y) {
        this.id = id
        this.move(x, y);
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}

// /-- IN ES5: --\ //
var Shape = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};
var Circle = function (id, x, y, radius) {
    Shape.call(this, id, x, y);
    this.radius = radius;
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

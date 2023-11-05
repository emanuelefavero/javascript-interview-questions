// * Function Scope vs Block Scope

// Q: What is Scope of a variable?
// A: Scope of a variable is the region and availability of that variable in your code

// Q: What is Function Scope?
// A: Variables declared inside a function are only accessible inside that function

function a() {
  let x = 1
}

// console.log(x) // ReferenceError: x is not defined

// Q: What is Block Scope?
// A: Variables declared inside a block are only accessible inside that block
// A block is anything between curly braces { }

{
  let y = 1
}

// console.log(y) // ReferenceError: y is not defined

// ---------------------------------------------------------------

// TIP: Variables declared with var are function scoped while variables declared with let and const are block scoped
// TIP: Variables declared with var are globally scoped if they are declared outside a function

var z = 1

{
  var z = 2
}

console.log(z) // 2

var i = 1

function b() {
  var i = 2
}

console.log(i) // 1

// ---------------------------------------------------------------

// Q: What is hoisting?

// A: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. So var variables are hoisted to the top of their function scope and globally scoped if they are declared outside a function

console.log(j) // undefined since we used var to declare the variable after this line of code
var j = 1

// console.log(k) // ReferenceError: k is not defined since we used let to declare the variable after this line of code
let k = 1

// NOTE: you cannot have two variables with the same name in ES5 with var but you can with let and const

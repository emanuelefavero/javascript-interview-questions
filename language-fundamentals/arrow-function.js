// Must known points of arrow function:
// 1. "this" keyword does not work in arrow function
// 2. "arguments" keyword does not work in arrow function
// 3. "new" keyword does not work in arrow function

// Classic function
function test() {
  console.log('test')
}

// Function Expression
const test2 = function () {
  console.log('test2')
}

// Arrow Function
// TIP: An arrow function is just a shorter syntax for a function expression
const test3 = () => {
  console.log('test3')
}


// TIP: IF you have only one parameter, you can skip the parentheses
const print = message => {
  console.log(message)
}

// TIP: If you have only one expression, you can skip the curly braces and the return keyword
const sum = (a, b) => a + b

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log('IIFE')
})()

// IIAF (Immediately Invoked Arrow Function)
(() => {
  console.log('IIAF')
})()

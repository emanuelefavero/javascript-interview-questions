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
;(function () {
  console.log('IIFE')
})()

// IIAF (Immediately Invoked Arrow Function)
;(() => {
  console.log('IIAF')
})()

// QUESTIONS
// Q: Why does "this" keyword not work in arrow function?
// A: In ES6 we already have "class" to define a class, so we don't need to use a "function" to define a class. So, arrow function does not need to have "this" keyword (previously we used functions to define a class)

// Q: Explain the output of the following code:
const obj = {
  method: () => {
    console.log(this)
  }
}

obj.method()

// A: The output will be the global object since arrow functions do not have their own "this" keyword so "this" will refer to the global object (window in the browser and global in Node.js)

// Q: Since arrow functions do not support "arguments" keyword, how can we get the arguments passed to a function?
// A: Using the rest operator (...)
const test4 = (...args) => {
  console.log(args)
}

test4(1, 2, 3) // [1, 2, 3]

// Q: Can you write immediately invoked arrow function?
// A: Yes, you can
;(() => console.log('IIAF'))()

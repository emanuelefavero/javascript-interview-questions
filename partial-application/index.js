// * Partial application
// Partial application is a technique for reducing the arity (number of arguments) of a function by creating a new function where some of the arguments are already applied

// Original function
function add(a, b, c) {
  return a + b + c
}

// Partial application
function addFive(...others) {
  return add(5, ...others)
}

console.log(addFive(2, 3)) // 10

// ------------------------------------------------------------
// Example 2

function multiply(a, b) {
  return a * b
}

function timesTwo(b) {
  return multiply(2, b)
}

console.log(timesTwo(10)) // 20

// ------------------------------------------------------------
// Example 3

function subtract(a, b, c) {
  return a - b - c
}

function subtractFiveAndTwo(a) {
  return subtract(a, 5, 2)
}

console.log(subtractFiveAndTwo(10)) // 3
// Explanation: subtractFiveAndTwo(10) is equivalent to subtract(10, 5, 2)
// 10 - 5 - 2 = 3

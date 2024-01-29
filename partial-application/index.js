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

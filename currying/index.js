// * Currying

// Currying in JavaScript is a technique of translating a function that takes multiple arguments into a sequence of functions, each taking a single argument

// TIP:  It's a way to partially apply functions by breaking them down into smaller, more specific functions.

// ! No currying
function add(a, b, c) {
  return a + b + c
}

console.log(add(1, 2, 3)) // 6, (1 + 2 + 3 = 6)

// * Same function, but curried
function curriedAdd(a) {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}

console.log(curriedAdd(1)(2)(3)) // 6, (1 + 2 + 3 = 6)

// ---------------------------------------------------------------

// TIP: One of the key features of currying is that you can call these curried functions separately

let addOne = curriedAdd(1) // 1
let addTwo = addOne(2)
let addThree = addTwo(3)

console.log(addThree) // 6, (1 + 2 + 3 = 6)

// ---------------------------------------------------------------

// NOTE: Only the last variable `addThree` gets the result of the sum
console.log(addTwo) // [Function (anonymous)]

// TIP: You can also call these separate functions with different arguments
let addFour = addTwo(4)
console.log(addFour) // 7, (1 + 2 + 4 = 7)

// ---------------------------------------------------------------
// * ES6 Shorthand for Currying
const subtract = (a) => (b) => (c) => a - b - c

console.log(subtract(10)(5)(3)) // 2, (10 - 5 - 3 = 2)

let subtractFive = subtract(5)
let subtractTwo = subtractFive(2)
let subtractOne = subtractTwo(1)

console.log(subtractOne) // 2, (5 - 2 - 1 = 2)

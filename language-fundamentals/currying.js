// Currying is a function that takes one argument at a time and returns a new function that accepts the next argument

// TIP: Currying is a technique used in many programming languages

function sum(a) {
  return (b) => {
    return a + b
  }
}

// TIP: You can also write currying like this:
// const sum = (a) => (b) => a + b

console.log(sum(5)(6)) // 11

// QUESTIONS
// Q: What is function currying?
// A: Currying is a function that takes one argument at a time and returns a new function that accepts the next argument

// Q: What will this statement do?
const multiply = (a) => (b) => (c) => a * b * c
// A:  This code is an example of currying. In order to get the result, you need to call the function like this:
console.log(multiply(3)(2)(2)) // 12, since 3 * 2 = 6 and 6 * 2 = 12

// Q: Explain practical usage of currying
// A: Currying is a useful functional programming technique that solves various purposes such as passing partial parameters, avoiding passing the same variable again and again, and so on

// Example of avoiding passing the same variable again and again
const calculateDiscount = (price) => (discount) => price * discount

const price = calculateDiscount(100)
console.log(price(0.2)) // 20
console.log(price(0.5)) // 50

// TIP: In the above example, we can avoid passing the price again and again by using currying

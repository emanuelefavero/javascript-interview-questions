// * Generators

// A generator is a function that can be paused and resumed. It can return (yield) multiple values.

// TIP: Generators are useful when you need to return multiple values from a function, but you don't want to compute them all at once

// Yield - The yield keyword is used to pause and resume a generator function (function* or legacy generator function)
// To create a generator function, we use the function* syntax
// .next() - The next() method returns an object with two properties: value and done

const genFunction = function* () {
  console.log('Hello')
  yield
  console.log('World')
  yield 'Yielded value'
  console.log('😄')
}

const generator = genFunction()

// You can use the .next() method to resume the generator
// console.log(generator.next()) // Hello { value: undefined, done: false }
// console.log(generator.next()) // World { value: undefined, done: false }
// console.log(generator.next()) // 😄 { value: 'Yielded value', done: false }

// You can use a for...of loop to iterate through the generator
for (let value of generator) {
  console.log(value) // Hello, World, Yielded value, 😄
}

// spread operator - You can also use the spread operator to iterate through the generator
const generator2 = genFunction()
console.log([...generator2]) // Hello, World, 😄, [ undefined, 'Yielded value' ]

// --------------------------------------------------
// call another generator from a generator

function* gen0() {
  console.log('Hi')
}

function* gen1() {
  yield* gen0()
}

gen1().next() // hi

// --------------------------------------------------
// generators with recursion

function* fib(n, current = 0, next = 1) {
  if (n === 0) return

  yield current

  yield* fib(n - 1, next, current + next)
}

console.log([...fib(6)]) // [ 0, 1, 1, 2, 3, 5 ]

// --------------------------------------------------

function* gen() {
  yield 'One'
  yield 'Two'
}

const generator3 = gen()
console.log(generator3.next()) // { value: 'One', done: false })
console.log(generator3.return('this is a custom value')) // { value: 'Two', done: false })
console.log(generator3.next()) // { value: undefined, done: true })

// Explanation: The .return() method tells the generator that we are done iterating even if we didn't reach the end of the generator
// TIP: We can pass a custom value to the .return() method

// --------------------------------------------------
// QUESTIONS

// Q: What are generator functions?
// A: Generator functions are functions that can be paused and resumed. They can return (yield) multiple values

// Q: Which is the correct syntax for a generator function?
// A: function* {} or function *() {} or function* gen() {}

// Q: Explain all methods of a generator
// A: The .next() method returns an object with two properties: value and done
// The .return() method tells the generator that we are done iterating even if we didn't reach the end of the generator
// The .throw() method throws an error into the generator

// Q: Explain the use of yield*
// A: The yield* keyword i used to call another generator from a generator

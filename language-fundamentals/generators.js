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
console.log(generator.next()) // Hello { value: undefined, done: false }
console.log(generator.next()) // World { value: undefined, done: false }
console.log(generator.next()) // 😄 { value: 'Yielded value', done: false }

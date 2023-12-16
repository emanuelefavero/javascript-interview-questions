// * Generators and try catch blocks

// The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown

function* gen() {
  try {
    yield 'One'
    yield 'Two'
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Finally')
  }
}

const generator4 = gen()

console.log(generator4.next()) // { value: 'One', done: false }
console.log(generator4.throw('Error')) // Finally { value: undefined, done: true }

// Explanation: The .throw() method throws an error into the generator. The error is caught by the try...catch block and the finally block is executed

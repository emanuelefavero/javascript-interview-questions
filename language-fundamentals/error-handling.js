// * Error handling in JavaScript

// The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown

try {
  let a = 10
  console.log(`a = ${a}`)

  letb = 50
  console.log(`b = ${b}`)
} catch (error) {
  console.log(error.name) // ReferenceError
  console.log(error.message) // b is not defined
  console.log(error.stack) // ReferenceError: b is not defined at Object.<anonymous> (/Users/pankaj/Projects/JavaScript/JavaScript-Interview-Preparation/language-fundamentals/error-handling.js:1:1)

  // console.log(error) // the whole error object
}

// --------------------------------------------------
// * throw statement

// If you want to create a custom error, you can use the throw statement
let age = 17

try {
  if (age < 18) throw new Error('You are too young')
  // TIP: You can also throw other types of errors:
  // if (age < 18) throw new SyntaxError('This is a syntax error')
  // if (age < 18) throw new ReferenceError('This is a reference error')
  // if (age < 18) throw new TypeError('This is a type error')
  // if (age < 18) throw new RangeError('This is a range error')
  // ...
} catch (err) {
  console.log(err.message) // You are too young
}

// --------------------------------------------------
// * finally statement
// The finally statement lets you execute code, after try and catch, regardless of the result

try {
  console.log('Hello')
} catch (error) {
  console.log(error)
} finally {
  console.log('Finally') // Finally
}

// --------------------------------------------------
// QUESTIONS

// Q: When do you need try...catch?
// A: You need try...catch when you want to handle errors in your code

// Q: How can you generate a custom error?
// A: You can use the throw statement to generate a custom error

// Q: What is the purpose of the finally statement?
// A: The finally statement lets you execute code, after try and catch, regardless of the result

// Q: How can you get the name or description of an error?
// A: You can use the name and message properties of the error object (err.name and err.message)

// Q: Can we have a finally block without a catch block?
// A: Yes

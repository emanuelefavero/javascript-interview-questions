// * Object Destructuring

// Extract values from objects and store them in variables
let user = {
  username: 'John',
  age: undefined,
}

let { username, age = 0 } = user

console.log(username) // John
console.log(age) // 0, if the value is undefined, use the default value

// ------------------------------------------------------------
// * You can also destructure a returned object from a function

function getUser() {
  return {
    username: 'John',
    age: 32,
  }
}

let { username: name, age: userAge } = getUser() // TIP: you can rename the variables if you want

console.log(name) // John
console.log(userAge) // 32

// ------------------------------------------------------------
// QUESTIONS

// Q: Explain a common scenario for object destructuring
// A: When you need to extract values from an object and store them in variables. For instance from s JSON file in a front end application that gets data with a back end API

// Q: Explain the output of this code:
let { a = 10, b } = {}
console.log(a, b) // 10, undefined
// A: If the value is undefined, the default value will be used, so a will be 10 and b will be undefined

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

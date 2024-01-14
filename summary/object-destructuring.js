// * Object Destructuring
// 1
let user = {
  username: 'John',
  age: 32,
  email: 'john@email.com',
}

let { username, age = 18, email: userEmail } = user
console.log(username, age, userEmail) // John 32 john@email.com

// 2
let { a = 10, b } = {}
console.log(a, b) // 10 undefined

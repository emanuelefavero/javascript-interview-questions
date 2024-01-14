// * Call, Apply, Bind

// * Call
// Call a function with a given this value and arguments provided individually
let user = {
  username: 'John',
}

function getUsername() {
  return this.username
}

console.log(getUsername.call(user)) // John

// * Apply
// Apply a function with a given this value and arguments provided as an array
function getUsernameAndAge(age) {
  return `${this.username} is ${age}`
}

console.log(getUsernameAndAge.apply(user, [32])) // John is 32

// * Bind
// Bind a function with a given this value and arguments provided individually
function getUsernameAndEmail(email) {
  return `${this.username} email is ${email}`
}

let usernameAndEmail = getUsernameAndEmail.bind(user)
console.log(usernameAndEmail('john@email.com')) // Joh email is john@email.com

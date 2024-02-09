// * Validate email address

let regex = /\w+@\w+\.[a-z]+/i

console.log(regex.test('john@email.com')) // true
console.log(regex.test('john.info@email.com')) // true
console.log(regex.test('john@email.')) // false

// * More complex email validation

regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

console.log(regex.test('john@email.com')) // true
console.log(regex.test('john.info@email.com')) // true
console.log(regex.test('john@email.')) // false

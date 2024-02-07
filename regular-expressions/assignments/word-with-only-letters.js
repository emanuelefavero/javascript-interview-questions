// * Validate that a word contains only letters

let regex = /\b[a-zA-Z]+\b/
console.log(regex.test('hello')) // true
console.log(regex.test('hello1')) // false

// 2
regex = /^[^\d]+$/
console.log(regex.test('hello')) // true
console.log(regex.test('hello1')) // false

// TIP: The ^ inside the square brackets negates the expression
// TIP: \d is a shorthand for [0-9]

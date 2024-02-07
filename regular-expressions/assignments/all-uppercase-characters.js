// * Validate if a string contains all uppercase characters

let = regex = /^[A-Z\s]+$/g

console.log(regex.test('HELLO WORLD')) // true
console.log(regex.test('hello WORLD')) // false

// TIP: \s is a shorthand for whitespace characters. IT is needed to match the space between the words

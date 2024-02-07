// * Validate that a string begins with a digit

let regex = /^\d/
console.log(regex.test('123')) // true
console.log(regex.test('1 23')) // true
console.log(regex.test('hello')) // false

// 2
regex = /^[0-9]/
console.log(regex.test('123')) // true
console.log(regex.test('1 23')) // true
console.log(regex.test('hello')) // false

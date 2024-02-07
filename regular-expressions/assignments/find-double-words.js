// * Find all the double words in a string

let regex = /\b(\w+)\s+\1\b/g

console.log(regex.test('hello hello')) // true
console.log(regex.test('hello ciao')) // false

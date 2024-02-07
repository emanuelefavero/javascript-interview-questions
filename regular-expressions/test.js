// * test()
// The test() method is used to test for a match in a string, and returns true or false

let string = 'it is what it is'
let regex = /is/
console.log(regex.test(string)) // true

console.log(/be/.test(string)) // false

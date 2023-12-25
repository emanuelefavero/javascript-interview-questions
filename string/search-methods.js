// Length
// The length property returns the length of a string:
let str = 'hello'
console.log(str.length) // 5

// ------------------------------------------------------------
// * indexOf() and lastIndexOf()

// indexOf() returns the index of the first occurrence of a substring in a string
console.log(str.indexOf('l')) // 2
// Explanation: first 'l' is at index 2

// lastIndexOf() returns the index of the last occurrence of a substring in a string
console.log(str.lastIndexOf('l')) // 3
// Explanation: last 'l' is at index 3

// TIP: You can also pass in a second argument to specify the starting index
console.log(str.indexOf('l', 3)) // 3
// Explanation: first 'l' after index 3 is at index 3

// TIP: These methods also work with longer strings, not just single characters

// NOTE: indexOf() and lastIndexOf can't work with regex, use search() instead
console.log(str.search(/l/)) // 2

// ------------------------------------------------------------
// * search()

// search() returns the index of the first match of a regex in a string
console.log(str.search(/(.)\1/)) // 2
// Explanation: first match of a repeated character is at index 2
// (.) matches any character, \1 is a back reference to the first captured group, ensuring the next character is the same as the first.

// NOTE: search() can't work with a second argument, use indexOf() instead if you need to specify a starting index

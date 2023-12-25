//  There are 3 string extraction methods in JavaScript: slice(), substring(), and substr().

// * slice()
// slice() extracts a part of a string and returns the extracted part as a new string.
let str = 'hello word'

console.log(str.slice(0, 5)) // 'hello'
// Explanation: slice from index 0 to index 5 (not including index 5)

console.log(str.slice(6)) // 'word'
// Explanation: slice from index 6 to the end of the string

// TIP: You can also use negative indexes
console.log(str.slice(-4)) // 'word'
// Explanation: slice from index -4 to the end of the string

// * substring()
// substring() is similar to slice(), but it can't accept negative indexes
console.log(str.substring(0, 5)) // 'hello'

// NOTE: substr() is deprecated, use slice() instead

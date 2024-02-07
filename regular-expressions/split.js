// * split()
// The split() method is used to split a string into an array of substrings, and returns the new array

let string = 'it is what it is, right?'

console.log(string.split(' ')) // [ 'it', 'is', 'what', 'it', 'is,', 'right?' ]

// * split() can be used with regular expressions
console.log(string.split(/is/)) // [ 'it ', ' what ', ' it, right?' ]

// TIP: 'is' will be used as a separator and will not be included in the result

// * To include the separator in the result, use parentheses
console.log(string.split(/(is)/)) // [ 'it ', 'is', ' what ', 'is', ' it, right?' ]

// * To limit the number of splits, use the second argument
console.log(string.split(/(is)/, 2)) // [ 'it ', 'is' ]

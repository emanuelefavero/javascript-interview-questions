// * Lookbehind
// Lookbehind is the same as lookahead, except that it looks behind instead of looking ahead.

// (?<=Dr.) is a lookbehind pattern. It matches the word character that is preceded by Dr.

let string = 'Dr.Strange is a wizard'
let regex = /(?<=Dr.)\w+/g
console.log(string.match(regex)) // [ 'Strange' ]

// TIP: To match dollar amounts, you need to escape the dollar sign \$ since it is a special character in regex
string = 'The price is $10'
regex = /(?<=\$)\d+/g
console.log(string.match(regex)) // [ '10' ]

// * Negative lookbehind

// (?<!Dr.) is a negative lookbehind pattern. It matches the digit that is not preceded by $

string = 'The quantity is 20, the price is $10'
regex = /\b(?<!\$)\d+\b/g
console.log(string.match(regex)) // [ '20' ]

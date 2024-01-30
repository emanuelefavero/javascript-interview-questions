// * \b - word boundary
// \b is a word boundary. A word boundary matches the position where a word character is not followed or preceded by another word-character

let string = 'This is blissful'

// * Without word boundary
let regex = /is/g
console.log(string.match(regex)) // [ 'is', 'is', 'is' ]
// Explanation: The word "is" is matched three times

// * With word boundary
regex = /\bis\b/g
console.log(string.match(regex)) // [ 'is' ]
// Explanation: The word "is" is matched because it is not followed or preceded by another word-character

// * Word boundary at the end
string = 'The best test'
regex = /est\b/g
console.log(string.match(regex)) // [ 'est', 'est' ]

// * Word boundary at the beginning
regex = /\bbe/g
console.log(string.match(regex)) // [ 'be' ]

// * Word boundary with numbers
string = '340 12 34567'
regex = /\b\d\d\d\b/g
console.log(string.match(regex)) // [ '340' ]

// TIP: \d is a digit character. \d\d\d matches three digit characters

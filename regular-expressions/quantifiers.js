// * Quantifiers

// The quantifiers specify how many occurrences of a character, group, or character class must be present in the input for a match to be found

// * * matches between 0 and unlimited times

let string = 'This is a kiss, I...'
let regex = /is*/gi // ? match 'i' followed by zero or more 's'
console.log(string.match(regex)) // [ 'is', 'is', 'iss', 'I' ]

// * + matches between 1 and unlimited times
regex = /is+/gi // ? match 'i' followed by one or more 's'
console.log(string.match(regex)) // [ 'is', 'is', 'iss' ]

// * ? matches between 0 and 1 time
regex = /is?/gi // ? match 'i' followed by zero or one 's'
console.log(string.match(regex)) // [ 'is', 'is', 'is', 'I' ]

// * {n} matches exactly n times
regex = /is{2}/gi // ? match 'i' followed by exactly two 's'
console.log(string.match(regex)) // [ 'iss' ]

// * {n,} matches at least n times
regex = /is{2,}/gi // ? match 'i' followed by at least two 's'
console.log(string.match(regex)) // [ 'iss' ]

// * {n,m} matches at least n times but no more than m times
regex = /is{1,2}/gi // ? match 'i' followed by one to two 's'
console.log(string.match(regex)) // [ 'is', 'is', 'iss' ]

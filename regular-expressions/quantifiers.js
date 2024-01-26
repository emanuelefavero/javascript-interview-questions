// * Quantifiers

// The quantifiers specify how many occurrences of a character, group, or character class must be present in the input for a match to be found

// * matches between zero and unlimited times

let string = 'This is a kiss, I...'
let regex = /is*/gi // ? match 'i' followed by zero or more 's'
console.log(string.match(regex)) // [ 'is', 'is', 'iss', 'I' ]

// + matches between one and unlimited times
regex = /is+/gi // ? match 'i' followed by one or more 's'
console.log(string.match(regex)) // [ 'is', 'is', 'iss' ]

// ? matches between zero and one time
regex = /is?/gi // ? match 'i' followed by zero or one 's'
console.log(string.match(regex)) // [ 'is', 'is', 'is', 'I' ]

// * Find a word with specific number of letters

// Find a word with 4 letters
let regex = /\b....\b/g

console.log('ciao mondo'.match(regex)) // ['ciao']

// 2
regex = /\b\w{4}\b/g

console.log('ciao mondo'.match(regex)) // ['ciao']

// TIP: \w is a shorthand for [a-zA-Z0-9_]

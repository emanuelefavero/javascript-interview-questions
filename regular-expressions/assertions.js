// * Assertions
// Assertions are patterns that only match if a certain condition is met

// * Anchors
// Anchors are a type of assertion that don't match any characters, but rather match a position before, after, or between characters

// * ^ - Start of string
console.log(/^This/.test('This is a string')) // true
console.log(/^This/.test('A string'))

// * $ - End of string
console.log(/bye$/.test('This is a string, bye')) // true
console.log(/bye$/.test('This is a string')) // false

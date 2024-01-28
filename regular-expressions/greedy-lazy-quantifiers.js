// * Greedy and Lazy Quantifiers
// Greedy quantifiers match as many characters as possible. Lazy quantifiers match as few characters as possible

// * Greedy behavior
let string = "JavaScript 'ES6' and 'ES7'"
let regex = /'.+'/g // ? match a single quote followed by one or more characters followed by a single quote
console.log(string.match(regex)) // [ "'ES6' and 'ES7'" ]

// TIP: This is the default behavior of quantifiers. It will match as many characters as possible

// * Lazy behavior
// To make a quantifier lazy, add a question mark after it

regex = /'.+?'/g
console.log(string.match(regex)) // [ "'ES6'", "'ES7'" ]

// TIP: Lazy quantifiers match as few characters as possible

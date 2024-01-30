// * Lookahead
// Lookahead is a pattern that tells the regex engine to look ahead in the string to check if the text inside the lookahead pattern matches

// (?=,) is a lookahead pattern. It matches the word character before the comma

let string = 'Hello, How are you'

regex = /\w+(?=,)/g
console.log(string.match(regex)) // [ 'Hello' ]

// TIP: \w+ matches one or more word characters

// * Negative lookahead
// (?!,) is a negative lookahead pattern. It matches the word character that is not followed by a comma

regex = /\w+(?!,)/g
console.log(string.match(regex)) // [ 'Hell', 'How', 'are', 'you' ]

// TIP: To only match whole words, use word boundaries \b
regex = /\b\w+(?!,)\b/g
console.log(string.match(regex)) // [ 'How', 'are', 'you' ]

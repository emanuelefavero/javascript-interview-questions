// * Count vowels and consonants in a string

let string = 'hello world'

// * Vowels
let regex = /[aeiou]/gi
let vowels = string.match(regex)
console.log(vowels) // [ 'e', 'o', 'o' ]
console.log(vowels.length) // 3

// * Consonants
regex = /[^aeiou\s]/gi
let consonants = string.match(regex)
console.log(consonants) // [ 'h', 'l', 'l', 'w', 'r', 'l', 'd' ]
console.log(consonants.length) // 7

// TIP: We need \s inside the square brackets to match spaces and remove them from the count with ^

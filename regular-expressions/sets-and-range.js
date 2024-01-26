// * Character Sets

let string = "I wonder why it's windy"
let regex = /w[io]n/g
console.log(string.match(regex)) // [ 'won', 'win' ]

// TIP: To match the entire word ('wonder' and 'windy'), we can add a match for any character that is not a white space character and ensure that there is one or more occurrence of such characters
regex = /w[io]n[^\s]+/g
console.log(string.match(regex)) // [ 'wonder', 'windy' ]

// ^\s matches any character that is not a white space character (equal to [^\r\n\t\f\v ])
// + matches between one and unlimited times, as many times as possible, giving back as needed (greedy)

// * Ranges
regex = /[i-o]/g
console.log(string.match(regex)) // [ 'o', 'n', 'i', 'i', 'n' ]

// NOTE: The range is based on the alphabet order, not the order of the characters in the regex

// Match all numbers between 1 and 5
let stringNumbers = '12 56 78'
regex = /[1-5]/g
console.log(stringNumbers.match(regex)) // [ '1', '2', '5' ]

// Match all uppercase letters
string = 'This the City of London'
regex = /[A-Z]/g
console.log(string.match(regex)) // ['T', 'C', 'L']

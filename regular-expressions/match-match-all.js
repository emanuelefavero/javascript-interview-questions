// * Match
// Match is a method that returns an array of the matches or null if no match is found

let string = 'It is what it is'
let regex = /is/g
console.log(string.match(regex)) // [ 'is', 'is' ]

// * MatchAll
// MatchAll is a method that returns an iterator of the matches
let matches = string.matchAll(regex)
for (const match of matches) {
  console.log(match)
}

// [ 'is', index: 3, input: 'It is what it is', groups: undefined ]
// [ 'is', index: 14, input: 'It is what it is', groups: undefined ]

// TIP: matchAll is a new method and is not supported in all browsers

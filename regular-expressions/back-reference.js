// * Back reference
// Back reference is used to match the same content as a previously matched group

let string = 'first code is 123-456, second is 123-123'
let regex = /(\d+)-\1/g
console.log(string.match(regex)) // [ '123-123' ]

// TIP: \1 refers to the first group we created between the first parentheses
// We are basically saying that we want to match the same content as the first group so 123-123 is the only match

// * To use named groups, use the syntax \k<name>
regex = /(?<zipcode>\d+)-\k<zipcode>/g
console.log(string.match(regex)) // [ '123-123' ]

// * Search
// The search() method searches a string for a specified value and returns the position of the match

let string = 'It is what it is'
let regex = /is/g

console.log(string.search(regex)) // 3, the first match is found at index 3

// ------------------------------

// * Search with no match
regex = /hello/g
console.log(string.search(regex)) // -1, no match is found

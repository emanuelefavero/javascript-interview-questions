// * toUpperCase()
let str = 'hello'
console.log(str.toUpperCase()) // 'HELLO'

// * toLowerCase()
console.log(str.toLowerCase()) // 'hello'

// * capitalize a string (first letter uppercase, the rest lowercase)
let str2 = 'hello'
console.log(str2[0].toUpperCase() + str2.slice(1)) // 'Hello'

// * trim()
// trim() removes whitespace from both ends of a string
let str3 = ' hello '
console.log(str3.trim()) // 'hello'

// ------------------------------------------------------------
// * replace()
// replace() replaces a specified value with another value in a string and returns a new string

let str4 = 'hello world'
console.log(str4.replace('hello', 'ciao')) // 'ciao world'

// TIP: replace() only replaces the first match
// To replace all matches, use a regex with the global flag
console.log(str4.replace(/l/g, 'x')) // 'hexxo worxd'

// TIP: If you dont' pass a second argument, the value will be replaced with undefined
console.log(str4.replace('hello')) // 'undefined world'

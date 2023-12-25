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

// * replace()
// The replace() method is used to replace a substring of a string with another string or a function.

let string = 'blue is my favorite color'
let regex = /blue/
console.log(string.replace(regex, 'red')) // red is my favorite color

// * To replace all occurrences, use the global flag
string = 'blue is my favorite color, blue is also my sister favorite color'
regex = /blue/g
console.log(string.replace(regex, 'red')) // red is my favorite color, red is also my sister favorite color

// * To replace with a function, use a function as the second argument
string = 'blue is my favorite color'
regex = /blue/
console.log(string.replace(regex, () => 'red')) // red is my favorite color

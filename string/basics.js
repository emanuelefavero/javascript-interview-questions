// JavaScript does not have a character type. Instead, a single character is created with a string type
let str = 'h'

// we can make sure to only get the first character by accessing the first index (like an array)
console.log(str[0]) // 'h'

// we can also use the charAt method
console.log(str.charAt(0)) // 'h'

// TIP: Strings in JavaScript are immutable, meaning they cannot be changed once created
// str[0] = 'j' // ! This will not work

// TIP: To change a string, we must create a new string

// ------------------------------------------------------------

// we can use single and double quotes interchangeably
console.log('hello') // 'hello'
console.log("hello") // 'hello' 

// BEWARE: code editors and formatters may change double quotes to single quotes and vice versa

// we can also use backticks
console.log(`hello`) // 'hello'

// if we want to use apostrophes in our string, we can use double quotes
console.log("I'm John") // "I'm John"

// if we want to use double quotes in our string, we can use single quotes
console.log('He said "hello"') // 'He said "hello"'

// if we want to use both single and double quotes in our string, we can use backticks
console.log(`He said "I'm John"`) // 'He said "I'm John"'

// or we can escape the quotes
console.log('I\'m John') // I'm John

// ------------------------------------------------------------
// TEMPLATE LITERALS

// backticks are used for template literals, which allow us to embed expressions in strings
let myName = 'John'
console.log(`My name is ${myName}`) // 'My name is John'

// we can also use expressions
console.log(`My name is ${myName.toUpperCase()}`) // 'My name is JOHN'

// we can also use multiline strings to avoid escaping new lines
console.log(`hello
  world`)
/*
hello
  world
*/

// ------------------------------------------------------------
// ESCAPE CHARACTERS

// \n - new line
console.log('hello\nworld') // hello
                            // world

// \t - tab
console.log('hello\tworld') // hello   world

// \\ - backslash
console.log('hello\\world') // hello\world

// \' - single quote
console.log('hello\'world') // hello'world

// \" - double quote
console.log('hello\"world') // hello"world

// ------------------------------------------------------------
// ESCAPE UNICODE CHARACTERS

// \uXXXX - unicode character
console.log('\u0040') // @

// ESCAPE EMOJI UNICODE CHARACTERS (longer than 4 characters)

// \u{XXXXX}
console.log('\u{1f602}') // 😂

// ------------------------------------------------------------
// QUESTIONS

// Q: Explain various ways to declare a string variable
// A: let str = 'hello'
//    let str = "hello"
//    let str = `hello`

// Q: How would you deal with unicode characters?
// A: With the \uXXXX syntax (escape unicode characters) and the \u{XXXXX} syntax for longer unicode characters such as emojis

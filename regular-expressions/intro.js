// * Regular Expressions

// * Regular Expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching

let text = 'This is a Text'

// * The search() method uses an expression to search for a match, and returns the position of the match
let regex = text.search(/text/i) // ? i = case insensitive
console.log(regex) // ? 10, the position of the match

/*
Flag/Modifier  Description
i              Perform case-insensitive matching
g              Perform a global match (find all matches)
m              Perform multiline matching
u              Perform a Unicode match (only available in ES6)
y              Perform a "sticky" search that matches starting at the current position in the target string
*/

// * Global match

regex = text.match(/is/g)
console.log(regex) // ? [ 'is', 'is' ]

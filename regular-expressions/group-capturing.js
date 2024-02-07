// * Group Capturing
// Group capturing is done by placing the characters to be captured inside a set of parentheses. This is useful when you want to capture a part of the string that matches a pattern.

let string = 'FirstName, LastName'
let regex = /(\w+), (\w+)/
console.log(string.replace(regex, '$2 $1')) // LastName FirstName

// TIP: We can access the captured groups using $1, $2, $3, and so on. $1 refers to the first group we created between the first parentheses, $2 refers to the second group, and so on

// * You can also give names to the groups
regex = /(?<first>\w+), (?<last>\w+)/
console.log(string.replace(regex, '$<last> $<first>')) // LastName FirstName

// TIP: The syntax for named groups is (?<name>pattern)

// * To access the named groups, use the groups property of the match object
let match = string.match(regex).groups
console.log(match) // { first: 'FirstName', last: 'LastName' }
console.log(match.first) // FirstName

// * Non capturing groups
// To create a group that is not captured, use the syntax (?:pattern)
regex = /(?:\w+), (\w+)/
console.log(string.replace(regex, '$1')) // LastName, since the first group is not captured

// TIP: The syntax for non-capturing groups is (?:pattern)

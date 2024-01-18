// * /m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)

// TIP: By using template literals, we can write multi-line strings in JavaScript instead of using \n

let text = `
Hello line 1
Hello line 2
Hello line 3
`

let regex = text.match(/^Hello/gm) // ? match all lines that start with Hello
console.log(regex) // [ 'Hello', 'Hello', 'Hello' ]

regex = text.match(/\d$/gm) // ? match all lines that end with a digit
console.log(regex) // [ '1', '2', '3']

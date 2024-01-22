// * /i modifier: case insensitive
// The i modifier is used to perform case-insensitive matching

let text = 'Hello hola'
let regex = text.match(/h.l/i)
console.log(regex) // [ 'Hel', index: 0, ... ]

// * /g modifier: global match
// The g modifier is used to perform a global match (find all matches rather than stopping after the first match)

text = 'Hello hola'
regex = text.match(/h.l/gi)
console.log(regex) // [ 'Hel', 'hol' ]

// * /m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)

// TIP: By using template literals, we can write multi-line strings in JavaScript instead of using \n

text = `
Hello line 1
Hello line 2
Hello line 3
`

regex = text.match(/^Hello/gm) // ? match all lines that start with Hello
console.log(regex) // [ 'Hello', 'Hello', 'Hello' ]

regex = text.match(/\d$/gm) // ? match all lines that end with a digit
console.log(regex) // [ '1', '2', '3']

// * . (dot) matches any character except newline
text = 'Hello Hola'
regex = text.match(/h.l/gi)
console.log(regex) // [ 'Hel', 'Hol' ]

// * /s modifier: single line. Causes . to match new line characters as well
text = `
Hello line 1
Hola line 2
`

regex = text.match(/h.l/gis)
console.log(regex) // [ 'Hel', 'Hol' ]

// * exec() method
// The exec() method executes a search for a match in a specified string. Returns a result array, or null.
text = 'Hello hola'
regex = /h.l/gi
console.log(regex.exec(text)) // [ 'Hel', index: 0, ... ]
console.log(regex.exec(text)) // [ 'hol', index: 6, ... ]
console.log(regex.exec(text)) // null, because there is no more matches

// * lastIndex property
// The lastIndex property specifies the index at which to start the next match.
text = 'Hello hola'
regex = /h.l/gi
console.log(regex.lastIndex) // 0
regex.lastIndex = 5
console.log(regex.exec(text)) // [ 'hol', index: 6, ... ]

// * \w+ matches any word character (equal to [a-zA-Z0-9_])
text = 'Hello hola'
regex = /\w+/gi
console.log(text.match(regex)) // [ 'Hello', 'hola' ]

// * \w matches any word character (equal to [a-zA-Z0-9_]) but only one character
text = 'Hello'
regex = /\w/gi
console.log(text.match(regex)) // [ 'H', 'e', 'l', 'l', 'o' ]

// * \W matches any non-word character (equal to [^a-zA-Z0-9_])
text = 'Hello hola'
regex = /\W/gi
console.log(text.match(regex)) // [ ' ' ] (space is a non-word character)

// * /y modifier: sticky
// The sticky flag return null if there is no match
text = 'Hello hola'
regex = /\w+/y
console.log(regex.exec(text)) // [ 'Hello', index: 0, ... ]
console.log(regex.exec(text)) // null, because there is no more matches (the next match is 'hola' but since there is a space before it, it will not match)

// * /u modifier: unicode
// The unicode flag enable unicode matching
text = '😂 😉'
regex = /\u{1F602}/gu // unicode for 😂
console.log(text.match(regex)) // [ '😂' ]

// TIP: Unicode characters can be found here: https://unicode-table.com/en/
// TIP: Unicode is a standard for encoding, representing, and handling text in most of the world's writing systems. It converts characters into hexadecimal numbers into binary and vice versa.
// TIP: Those hexadecimal numbers are called code points. For example, the code point for A is U+0041, the code point for B is U+0042, and so on.
// TIP: A plane is a group of 65,536 code points. The first plane is called the Basic Multilingual Plane (BMP). The BMP contains most of the characters for modern languages. The other planes are called Supplementary Planes. There are 16 Supplementary Planes, numbered 1 through 16. Each Supplementary Plane contains 65,536 code points.
// TIP: Code unit is a unit of measurement used to describe how many bits are used to encode a single character. For example, UTF-8 uses 8-bit code units, UTF-16 uses 16-bit code units, and UTF-32 uses 32-bit code units.
// TIP: Surrogate pairs are used to represent characters outside the BMP. A surrogate pair consists of two 16-bit code units, where the first unit is a high surrogate and the second unit is a low surrogate. The high surrogate is in the range U+D800 through U+DBFF, and the low surrogate is in the range U+DC00 through U+DFFF.

console.log('A'.codePointAt(0)) // 65
console.log('\uD83D\uDE00') // 😀, this emoji is represented by two code units which are surrogate pairs
console.log('\u{1F602}') // 😂, you can also represent emojis with unicode like this

// TIP: A grapheme in unicode context is a user-perceived character
// TIP: A glyph is a graphical representation of a character (a character can have multiple glyphs, e.g. e and é)

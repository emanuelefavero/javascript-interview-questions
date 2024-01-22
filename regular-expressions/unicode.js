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

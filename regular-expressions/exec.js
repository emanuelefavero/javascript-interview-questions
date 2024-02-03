// * exec()
// exec() method returns an array and updates the lastIndex property of the regex object

let string = 'It is what it is'
let regex = /is/g

console.log(regex.exec(string))
// [ 'is', index: 3, input: 'It is what it is', groups: undefined ]

console.log(regex.lastIndex) // 5, this is the index where the next search will start

console.log(regex.exec(string))
// [ 'is', index: 14, input: 'It is what it is', groups: undefined ]

console.log(regex.lastIndex) // 16

console.log(regex.exec(string)) // null, since there is no match

// TIP: If you want to reset the lastIndex property, set it to 0
// regex.lastIndex = 0

// ------------------------------
// * exec() with loop

string = 'It is what it is'
regex = /is/g

let output = ''

while (output !== null) {
  output = regex.exec(string)
  console.log('loop', output)
}

// loop [ 'is', index: 3, input: 'It is what it is', groups: undefined ]...

// * Validate date format mm/dd/yyyy

let regex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/

console.log(regex.test('10/16/1960')) // true
console.log(regex.test('1/16/1960')) // true
console.log(regex.test('99/1/a')) // false

// * Split the regex in variables so it easier to read
let month = '[0-9]{1,2}'
let day = '[0-9]{1,2}'
let year = '[0-9]{4}'
regex = new RegExp(`^${month}/${day}/${year}$`)

console.log(regex.test('10/16/1960')) // true
console.log(regex.test('1/16/1960')) // true
console.log(regex.test('99/1/a')) // false

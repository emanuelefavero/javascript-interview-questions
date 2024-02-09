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

// * Validate value in date format yyyy-mmm-dd
year = '(19|20)[0-9]{2}'
month = '(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)'
day = '(0[1-9]|[12][0-9]|3[01])'

regex = new RegExp(`^${year}-${month}-${day}$`, 'i') // i flag for case insensitive

console.log(regex.test('2019-jan-01')) // true
console.log(regex.test('2019-Jan-01')) // true
console.log(regex.test('2019-jan-32')) // false
console.log(regex.test('2019-jan-1')) // false

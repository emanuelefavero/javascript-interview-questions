// * Validate that a string has a word with only digits

let regex = /\b\d+\b/
console.log(regex.test('hello 123 world'))
console.log(regex.test('hello world'))

// * Validate credit card number

let regex = /^\d{4} \d{4} \d{4} \d{4}$/

console.log(regex.test('0000 0000 0000 0000')) // true
console.log(regex.test('0000 0000')) // false

// TIP: For more complex credit card validation, you can use a library or the Luhn algorithm

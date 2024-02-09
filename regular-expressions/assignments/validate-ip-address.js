// * Validate IP address

let regex = /\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}/

console.log(regex.test('192.168.8.1')) // true
console.log(regex.test('192.168')) // false

// * More complex IP address validation

let zeroTo255 = '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?){1,3}'

// TIP: The ? makes the preceding token in the regular expression optional

regex = new RegExp(
  `^${zeroTo255}\\.${zeroTo255}\\.${zeroTo255}\\.${zeroTo255}$`
)

// TIP: The double backslash is used to escape the dot (.) character

console.log(regex.test('192.168.8.1')) // true
console.log(regex.test('192.168')) // false

// TODO commit .../assignments/validate-ip-address

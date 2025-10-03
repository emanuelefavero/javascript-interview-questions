// * Deep Clone an Object

let obj = {
  name: 'John',
  age: 36,
  address: {
    street: '123 Main St',
    city: 'New York',
  },
  hobbies: ['reading', 'traveling'],
}

// 1 - With JSON methods (doesn't work with functions, undefined, symbols, dates, etc.)
let clone = JSON.parse(JSON.stringify(obj))
console.log(clone)
console.log(clone === obj) // false

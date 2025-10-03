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

// Check if two objects are equal
function equal(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(equal(obj, clone))

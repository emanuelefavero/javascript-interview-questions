// * OBJECT LITERAL

let user = {
  // * Property
  name: 'John',
  age: 32,

  // * Method
  getName() {
    return user.name
  },
}

console.log(user) // { name: 'John', age: 32, getName: [Function: getName] }
console.log(user.getName()) // John

// * convert object to JSON
let json = JSON.stringify(user)
console.log(json) // {"name":"John","age":32}

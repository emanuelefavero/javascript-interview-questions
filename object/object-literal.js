// * OBJECT LITERAL

let property = 'Age'

let user = {
  // * Property
  name: 'John',
  age: 32,

  // * Method (es6 syntax)
  getName() {
    return user.name
  },

  // * Dynamic property (es6)
  // You can use square brackets in an object literal to create a dynamic property
  // The value of the property is evaluated as an expression
  ['get' + property]: () => {
    return user.age
  },
}

console.log(user) // { name: 'John', age: 32, getName: [Function: getName], getAge: [Function: getAge] }
console.log(user.getName()) // John
console.log(user.getAge()) // 32

// * convert object to JSON
let json = JSON.stringify(user)
console.log(json) // {"name":"John","age":32}

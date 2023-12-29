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

// ------------------------------------------------------------
// QUESTIONS

// Q: Can you have dynamic keys in an object literal?
// A: Yes, you can use square brackets to create a dynamic key

// Q: How can you add read-only properties to an object?
let obj = {}

Object.defineProperty(obj, 'name', {
  value: 'John', // value of the property
  writable: false, // NOTE: read-only
  enumerable: true, // enumerable - can be iterated
  configurable: false, // property can't be deleted or changed
})

console.log(obj.name) // John
obj.name = 'Jack' // NOTE: try to change the value
console.log(obj.name) // John, still the same

// TIP: If you need to define multiple properties at once, use Object.defineProperties()

// A: You can use Object.defineProperty() and set writable to false to make a property read-only

// Q: What is property value short hand in object literal?
let firstName = 'Ben'
let age = 44

let user2 = {
  firstName,
  age,
}

console.log(user2) // { firstName: 'Ben', age: 44 }

// A: If the property name and the variable name are the same, you can omit the property value

// Q: What will be the output of the following code?
let obj1 = {
  name: 'Kate',
}
let obj2 = obj1
obj2.name = 'James'
console.log(obj1.name) // James, NOTE: obj1 is changed

// A: obj1 and obj2 are references to the same object, so changing obj2.name will also change obj1.name

// Q: How can we create a clone of an object?
let obj3 = Object.assign({}, obj1) // {} is the target object, obj1 is the source object
obj3.name = 'Jack'
console.log(obj1.name) // James, NOTE: obj1 is still the same

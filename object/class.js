// * Class

let getData = 'getAge' // NOTE: dynamic property name

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age || 0
  }

  getName() {
    return this.name
  }

  // * Dynamic property (es6)
  [getData]() {
    return this.age
  }

  // * Static property
  static className = 'Person'

  // * Static method
  static getClassName() {
    return `Class name: ${this.className}`
  }
}

let person = new Person('John', 32)

console.log(person) // Person { name: 'John', age: 32 }
console.log(person.name) // John

console.log(person.getAge()) // 32, call the dynamic property

// TIP: We don't need to create an instance of the class to call a static property or method
// TIP: you can access the static property and method from the class itself or outside the class
console.log(Person.className) // Person, access the static property
console.log(Person.getClassName()) // Class name: Person, call the static method

// ------------------------------------------------------------
// QUESTIONS

// Q: How can you create a class?
// A: You can use the class keyword and the constructor() method

// Q: When is the constructor called?
// A: The constructor is called when you create a new instance of the class

// Q: Can we have dynamic properties in a class?
// A: Yes, you can use square brackets to create a dynamic property

// Q: What is a class expression?

// Class expression
let Person2 = class {
  constructor(name, age) {
    this.name = name
    this.age = age || 0
  }

  getName() {
    return this.name
  }
}

let person2 = new Person2('John', 32)
console.log(person2.getName()) // John

// A: A class expression is another way to define a class. It can be named or unnamed

// Q: What are static methods?
// A: Static methods are methods that can be called without creating an instance of the class

// Q: How can you call another static method from inside the class definition?
// A: You can use the this keyword

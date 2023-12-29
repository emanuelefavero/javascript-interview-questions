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

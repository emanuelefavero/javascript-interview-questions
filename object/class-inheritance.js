// * Inheritance

// * extends, super
class Animal {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name) // call the parent constructor with name as argument
    this.age = age
  }

  // * Call the parent method with super
  getNameAndAge() {
    return `${super.getName()} is ${this.age} years old`
  }
}

let cat = new Cat('Tom', 3)
console.log(cat.getName()) // Tom, call the parent method
console.log(cat.getNameAndAge()) // Tom is 3 years old, call the parent method from the child class

// ------------------------------------------------------------
// QUESTIONS

// Q: How can you inherit a class?
// A: You can use the extends keyword

// Q: What is sub classing?
// A: Sub classing is the same as inheritance

// Q: What is super?
// A: super is used to call the parent constructor or parent methods

// Q: How can you override a method?
// A: With the super keyword

// Q: How can you extend a built-in class?
class Child extends String {}
let child = new Child('Hello')
console.log(child.toLowerCase()) // hello, call the built-in method toLowerCase() from the parent class String

// A: You can use the extends keyword

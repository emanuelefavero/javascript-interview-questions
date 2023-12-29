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

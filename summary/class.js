// * Class
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getName() {
    return this.name
  }
}

let user = new User('John', 32)
console.log(user.getName())

// * Class expression

let Fruit = class {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

console.log(new Fruit('banana').getName()) // banana

// * Static members
class Bird {
  // static property
  static name = 'budgie'

  // static method
  static getColor(color) {
    return color
  }
}

console.log(Bird.name) // budgie
console.log(Bird.getColor('white')) // white

// * Inheritance
class Animal {
  constructor(name) {
    this.name = name
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name) // call the parent constructor with super
    this.color = color
  }
  getName() {
    return this.name
  }
}

let cat = new Cat('cat', 'white')
console.log(cat.getName()) // cat

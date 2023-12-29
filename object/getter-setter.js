// * Getter and Setter (Class Accessors)

// Getters and setters are special methods used to define object accessors. Accessors are properties that execute a function when they are accessed (getter) or modified (setter).

// Getter is executed automatically when a property is read
// Setter is executed automatically when a property is modified

class User {
  constructor(name) {
    this._name = name // _name is a convention for private property
  }

  // * Getter
  get name() {
    return this._name.toUpperCase() // return name in uppercase
  }

  // * Setter
  set name(value) {
    this._name = value.toLowerCase() // store name in lowercase
  }
}

let user = new User('John')

console.log(user.name) // JOHN, the getter is executed when we read user.name so we get the uppercase name

// TIP: We can't see it but in this example the name is stored in lowercase by the setter

// ------------------------------------------------------------
// * You can create a read-only property by omitting the setter

class User2 {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name.toUpperCase()
  }
}

let user2 = new User2('John')

user2.name = 'Jack' // NOTE: try to change the name
console.log(user2.name) // JOHN, still the same

// ? Why is the name still the same?
// Because we didn't define a setter so the name can't be changed

// ------------------------------------------------------------
// QUESTIONS

// Q: What are getter and setters?
// A: Getters and setters are special methods used to define object accessors. Accessors are properties that execute a function when they are accessed (getter) or modified (setter).

// Q: What is the difference between a getter and a method?
// A: A getter is a special method that is executed automatically when a property is read. A method is a function that can be executed manually.

// Q: Explain a real world use case for getters and setters
// A: Getters and setters are useful when you want to execute some code when a property is accessed or modified. For example, you can use a getter to convert a property to uppercase when it is read.

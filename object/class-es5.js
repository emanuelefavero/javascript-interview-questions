// * Class (es5)

function Person(name, age) {
  this.name = name
  this.age = age || 0
}

// * Method
Person.prototype.getName = function () {
  return this.name
}

// * Static property -
// if you don't use the 'this' keyword, the property will be added to the global object
Person.className = 'Person'

// * Static method
// if you don't use `prototype`, the method will be added to the global object and you can call it directly without creating an instance of the class
Person.getClassName = function () {
  return `Class name: ${this.className}`
}

let person = new Person('John', 32)
console.log(person.getName()) // John

// TIP: We don't need to create an instance of the class to call a static property or method
// TIP: you can access the static property and method from the class itself or outside the class
console.log(Person.className) // Person
console.log(Person.getClassName()) // Class name: Person

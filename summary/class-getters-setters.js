// * Getters and Setters

class User {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name.toUpperCase()
  }

  set name(value) {
    this._name = 'Dr. ' + value.toLowerCase()
  }
}

let user = new User('John')

// GET
console.log(user.name) // JOHN

// SET
user.name = 'Jack'
console.log(user.name) // MR. JACK

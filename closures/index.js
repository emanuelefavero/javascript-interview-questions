// * Closures

// A Closure is a function that has access to its outer function scope even after the outer function has returned

// TIP: Since JavaScript functions have access to the scope "above" them, closures can also be created by calling a function inside another function

// ----------------------------
// * Example: Creating a simple closure

function greet(prefix) {
  return (name) => {
    return `${prefix} ${name}`
  }
}

const sayHello = greet('Hello')
console.log(sayHello('John')) // Hello John

const sayHi = greet('Hi')
console.log(sayHi('John')) // Hi John

// ----------------------------
// * Example: Creating a counter with closures

const add = (() => {
  let counter = 0

  return () => {
    counter++
    return counter
  }
})()

console.log(add()) // 1
console.log(add()) // 2
console.log(add()) // 3

// TIP: Closures are useful to create private variables and methods that cannot be accessed from outside the scope

// TIP: Closures are useful when fetching data from an API, since the data can be stored in a variable and accessed later by a function

// ----------------------------
// * Example: Fetching data from an API

function fetchUser() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((data) => console.log(data))
}

const user = fetchUser() // { id: 1, name: 'Leanne Graham', ... }

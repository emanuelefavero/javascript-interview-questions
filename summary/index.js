// VAR vs LET vs CONST
// SCOPE
// var is function-scoped, so when we redeclare x inside the if block, it changes the value of x outside the block as well.
function main() {
  var x = 10

  if (true) {
    var x = 20
  }

  return x
}

console.log(main()) // 20

// let and const are block-scoped, so when we redeclare y inside the if block, it doesn't change the value of y outside the block.
function main2() {
  let y = 10

  if (true) {
    let y = 20
  }

  return y
}

console.log(main2()) // 10

// HOISTING
// var is hoisted, so we can access the variable before it's declared (but it's value is undefined at this point).
function main3() {
  console.log(a)
  var a = 10
}
main3() // undefined

// let and const are not hoisted, so we can't access the variable before it's declared. This will throw a ReferenceError.
function main4() {
  console.log(b)
  let b = 10
}
// main4()
// ReferenceError: Cannot access 'b' before initialization

// RE-DECLARATION
// var can be re-declared multiple times in the same scope.
function main5() {
  var c = 10
  var c = 20

  return c
}
console.log(main5()) // 20

// let and const can't be re-declared in the same scope. This will throw a SyntaxError.
// function main6() {
//   let d = 10
//   let d = 20

//   return d
// }
// console.log(main6())

// ----------
// FUNCTIONS vs ARROW FUNCTIONS
// HOISTING
// Function declarations are hoisted, so we can call the function before it's declared.
main7() // Hello
function main7() {
  console.log('Hello')
}

// Arrow functions are not hoisted, so we can't call the function before it's declared. This will throw a ReferenceError.
// main8()
const main8 = () => console.log('Ciao')

// Arrow functions are not hoisted because they are assigned to a variable, and variables are not hoisted.
// console.log(e) // ReferenceError: Cannot access 'e' before initialization
const e = 'Hello'

// ----------
// PASSED BY VALUE vs PASSED BY REFERENCE
// When we pass a primitive value (string, number, boolean), it will be passed by value
let f = 10
let f2 = f
f++
console.log(f2) // 10

let obj = { name: 'John' }
let obj2 = obj
obj.name = 'Jack'
console.log(obj2) // { name: 'Jack' }

// We can destruct an object and change a property at the same time
let obj3 = { id: 0, name: 'John' }
let obj4 = { ...obj3, name: 'Jack' }
console.log(obj4) // { id: 0, name: 'Jack' }

// ----------
// PROMISES vs ASYNC/AWAIT
// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true

    if (success) resolve('Success')
    else reject('Error')
  }, 100)
})

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))

// Async/Await
async function main9() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

  console.log('Async/Await resolved')
}

main9() // Async/Await resolved

// ----------
// CALLBACKS
// Callbacks are functions passed as arguments to another function
function main10(callback) {
  callback()
}

main10(() => console.log('Callback')) // Callback

// Callbacks can be synchronous or asynchronous
function main11(callback) {
  setTimeout(() => {
    callback()
  }, 1000)
}

main11(() => console.log('Callback')) // Callback

// Callbacks can be nested
function main12(callback) {
  callback()
}

main12(() => {
  console.log('Callback 1')

  main12(() => {
    console.log('Callback 2')
  })
})

// ----------
// CLOSURES
// A closure is a function that has access to the outer function's scope

function main13() {
  let g = 10

  return () => {
    console.log(g)
  }
}

const closure = main13()
closure() // 10
// OR: main13()()

// ----------
// PROTOTYPES
// Prototypes are the mechanism by which JavaScript objects inherit features from one another
function Person(name) {
  this.name = name
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`)
}

const person = new Person('John')

person.sayHello() // Hello, my name is John

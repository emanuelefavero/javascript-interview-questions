// * Call, Apply, Bind
// Call, Apply and Bind are used to change the `this` value of a function

// * Call
// Call method is used to call a function with a given this value and arguments provided individually

let obj = {
  a: 2,
}

function test() {
  console.log(this) // { a: 2 }
  console.log(this.a) // 2
}

test.call(obj) // { a: 2 }, call test() with obj as this value

// NOTE: You can pass arguments to the function as well
function test2(b) {
  console.log(this.a + b)
}

test2.call(obj, 3) // 5, call test2() with obj as this value and 3 as argument

// * Apply
// Apply method is similar to call() but it takes arguments as an array

function test3(b, c) {
  console.log(this.a + b + c)
}

test3.apply(obj, [3, 2]) // 7, call test3() with obj as this value and [3, 2] as arguments

// * Bind
// Bind method is used to create a new function with a given this value and arguments provided individually

function test4(b) {
  console.log(this.a + b)
}

let add = test4.bind(obj) // create a new function with obj as this value
add(4) // 6, call test4() with obj as this value and 4 as argument

// ------------------------------------------------------------
// QUESTIONS

// Q: What is the difference between call(), apply() and bind()?
// A: call() and apply() are used to call a function with a given this value and arguments provided individually or as an array
// bind() is similar, but it returns a new function instead of calling the function immediately

// Q: What will be the output of the following code?

/*
let obj2 = {
  a: 4,
}

function test5() {
  this = obj2 // ! ERROR
}

test5() // TypeError: Invalid left-hand side in assignment
*/

// A: Error, since you can't assign a value to this

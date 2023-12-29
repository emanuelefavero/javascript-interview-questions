// * this

// The this keyword contains the current context. It can have different values depending on the scope where it is used.

console.log(this) // {}, empty object if used in the global scope with Node.js
// TIP: On the browser, this refers to the window object in the global scope

function test() {
  console.log(this)
}
// test() // if you run the function test() in the browser, this will still refer to the window object

let obj = {
  test() {
    console.log(this)
  },

  // NOTE: You can't use this in arrow functions. It will refer to the global scope
  test2: () => {
    console.log(this)
  },
}

obj.test() // { test: [Function: test] }, this now refers to the object obj
obj.test2() // {}, this now refers to the global scope since arrow functions don't have their own this

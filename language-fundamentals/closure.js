// Closure
// A closure is a function that has access to variables from its outer (enclosing) scope even after the outer function has finished execution
function outer() {
  let a = 10

  // TIP: When we return a function, we can then assign it to a variable and call it later
  return () => {
    console.log(a)
  }
}

const closure = outer()
closure() // 10

// Closure example 2 - Counter
// TIP: We can use closures to create private variables and change their values outside the function by returning the function that changes the value of the private variable
function counter() {
  let value = 0

  return () => {
    value++
    return value
  }
}

const closure2 = counter()
console.log(closure2()) // 1
console.log(closure2()) // 2
console.log(closure2()) // 3

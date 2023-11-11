// Currying is a function that takes one argument at a time and returns a new function that accepts the next argument

// TIP: Currying is a technique used in many programming languages

function sum(a) {
  return (b) => {
    return a + b
  }
}

// TIP: You can also write currying like this:
// const sum = (a) => (b) => a + b

console.log(sum(5)(6)) // 11

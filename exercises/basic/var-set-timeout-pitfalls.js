// * var and setTimeout pitfalls

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
} // 3 3 3

// Explanation: The variable 'i' is declared with 'var', which has function scope. By the time the setTimeout callbacks are executed, the loop has already completed and 'i' has the value 3. Therefore, all three callbacks log 3.

// TIP: If you want to capture the value of 'i' at each iteration, you can use 'let' instead of 'var', as 'let' has block scope.
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
} // 0 1 2

// Another way to capture the value of 'i' is to use an IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
  ;(function (i) {
    setTimeout(() => {
      console.log(i)
    }, 0)
  })(i)
} // 0 1 2

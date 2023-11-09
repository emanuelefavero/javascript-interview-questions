// * When do you get Infinity or -Infinity?

// Example
// You will get Infinity or -Infinity when you divide a number by 0 or when you get a value that is greater than the maximum value JavaScript can handle (a 64-bit floating point number)
console.log(1 / 0) // Infinity
console.log(-1 / 0) // -Infinity
console.log(1e3) // 1000 - 1e3 is the same as 1 * 10^3 (it tells JavaScript to add 3 zeros to the number 1)
console.log(1e-3) // 0.001 - 1e-3 is the same as 1 * 10^-3 (it tells JavaScript to subtract 3 zeros from the number 1)
console.log(1e400) // Infinity
console.log(-1e400) // -Infinity

// Number.MAX_VALUE is the maximum value JavaScript can handle
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308 (1.7976931348623157 * 10^308

console.log(Number.MAX_VALUE * 2) // Infinity

// Number.POSITIVE_INFINITY is the same as Infinity
console.log(Number.POSITIVE_INFINITY) // Infinity
console.log(Number.NEGATIVE_INFINITY) // -Infinity

// * Infinity is useful when you want to add an if statement that checks if a number is greater than the maximum value JavaScript can handle
let num = 1e400

function checkNum(num) {
  if (num === Infinity) {
    return 'Number is too large'
  } else {
    return num
  }
}

console.log(checkNum(num)) // Number is too large

// To check if a number is finite or infinite you can also use isFinite()
console.log(isFinite(num)) // false

// QUESTIONS
// Q: How will you put a validation for positive or negative Infinity?
// A: You can use the isFinite() method or check if the number is equal to Infinity or -Infinity

// Q: What will be the output of this code? console.log(1 / 0)
// A: Infinity

// * Polyfill
// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it

// * Write a polyfill for the JavaScript reduce method
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

// Example of reduce method
let numbers = [1, 2, 3]
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0)
console.log(sum) // 6

// Implement the reduce method polyfill using a for loop

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function')
    }

    const array = this
    let accumulator = initialValue || array[0]
    let i = initialValue ? 0 : 1 // ? If initialValue is provided, start from the first element, otherwise start from the second element

    for (i; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array) // ? The callback function is called with four arguments: accumulator, currentValue, currentIndex, and array
    }

    return accumulator
  }
}

// * Test the polyfill
let sum2 = numbers.reduce((accumulator, current) => accumulator + current, 0)
console.log(sum2) // 6

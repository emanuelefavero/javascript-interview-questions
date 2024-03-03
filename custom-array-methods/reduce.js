// * Implement a custom reduce function that works exactly like JS reduce method

Array.prototype.customReduce = function (callback, accumulator) {
  for (let i = 0; i < this.length; i++) {
    // If accumulator is not provided, set it to the first element of the array at the first iteration
    if (!accumulator && i === 0) {
      accumulator = this[0]
    } else {
      accumulator = callback(accumulator, this[i], i, this)
    }
  }

  return accumulator
}

// ------------------------
// TESTS

console.log(
  [1, 2, 3].customReduce((accumulator, current) => accumulator + current)
) // 6

console.log(
  [1, 2, 3].customReduce((accumulator, current) => accumulator + current, 10)
) // 16

console.log(
  [1, 2, 3].customReduce((accumulator, current) => accumulator + current, 0)
) // 6

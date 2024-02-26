// * Implement a custom filter function that works exactly like JS filter method

Array.prototype.customFilter = function (callback) {
  let result = []

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }

  return result
}

// ------------------------
// TESTS

console.log([1, 2, 3, 4, 5].customFilter((value) => value > 3)) // [4, 5]
console.log([1, 2, 3, 4, 5].customFilter((value) => value < 3)) // [1, 2]

// TODO commit custom-array-methods/filter

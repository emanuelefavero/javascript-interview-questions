// * Implementing custom map function that works exactly like JS map method

Array.prototype.customMap = function (callback) {
  let result = []

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }

  return result
}

console.log([1, 2, 3, 4, 5].customMap((value) => value * 10))
// [10, 20, 30, 40, 50]

// NOTE: Extending native objects is considered bad practice. It's better to create a utility function that takes an array as an argument and returns a new array with the desired functionality. This way, you avoid polluting the global namespace and avoid potential conflicts with other libraries.

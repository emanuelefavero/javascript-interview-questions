// built in sort method
console.log([3, 10, 1, 2].sort((a, b) => a - b)) // [1, 2, 3, 10]

// ------------------------

// * Implement a custom sort function that works exactly like JS filter method (use quick sort algorithm)
Array.prototype.customSort = function (callback) {
  if (this.length <= 1) return this // Base case

  const pivot = this[this.length - 1]
  const left = []
  const right = []

  for (let i = 0; i < this.length - 1; i++) {
    // TIP: The next line is in relation to passing (a, b) => a - b as the callback, so if the result is negative (a - b), a comes before b and vice versa
    if (callback(this[i], pivot) < 0) {
      left.push(this[i])
    } else {
      right.push(this[i])
    }
  }

  return [...left.customSort(callback), pivot, ...right.customSort(callback)]
}

// ------------------------
// TESTS

console.log([3, 10, 1, 2].customSort((a, b) => a - b)) // [1, 2, 3, 10]

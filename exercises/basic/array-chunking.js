// * Array Chunking

// Write a function that takes an array and a chunk size, and returns a new array where the original array is split into subarrays of the given size.

// TIP: In-place solution

function chunkArray(array, size) {
  let result = []

  while (array.length) {
    result.push(array.splice(0, size))
  }

  return result
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)) // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6], 3)) // [[1, 2, 3], [4, 5, 6]]

// ---

// TIP: Functional programming solution
function chunkArray2(array, size) {
  let result = []

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }

  return result
}

console.log(chunkArray2([1, 2, 3, 4, 5], 2)) // [[1, 2], [3, 4], [5]]
console.log(chunkArray2([1, 2, 3, 4, 5, 6], 3)) // [[1, 2, 3], [4, 5, 6]]

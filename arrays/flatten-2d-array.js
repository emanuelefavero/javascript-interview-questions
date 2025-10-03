// * Flatten 2d array

let array = [
  [1, 2],
  [3, 4],
]

// - - - - - -

// 1 - With reduce
function flatten(array) {
  return array.reduce((acc, current) => [...acc, ...current], [])
}
console.log(flatten(array)) // [1, 2, 3, 4]

// - - - - - -

// 2 - With built-in `flat` method
function flatten2(array) {
  return array.flat(1)
}
console.log(flatten2(array)) // [1, 2, 3, 4]

// - - - - - -

// 3 - With for loop
function flatten3(array) {
  let result = []

  for (const item of array) {
    if (Array.isArray(item)) result.push(...item)
    else result.push(item)
  }

  return result
}
console.log(flatten3(array)) // [1, 2, 3, 4]

// - - - - - -

// 4 - With Recursion (for deeply nested arrays)
function flatten4(array) {
  let result = []

  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...flatten4(item))
    } else {
      result.push(item)
    }
  }

  return result
}
console.log(flatten4(array)) // [1, 2, 3, 4, 5]

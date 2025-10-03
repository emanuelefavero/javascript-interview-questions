// * Flatten Deep array

let array = [1, [2, [3, [4, 5]]], 6]

// - - - - - -

// 1 - With built-in `flat` method
function flatten(array) {
  return array.flat(Infinity)
}
console.log(flatten(array)) // [1, 2, 3, 4, 5, 6]

// 2 - With Recursion
function flatten2(array, result = []) {
  for (const item of array) {
    if (Array.isArray(item)) {
      flatten2(item, result)
    } else result.push(item)
  }
  return result
}

console.log(flatten2(array))

// 3 - With Recursion 2
function flatten3(array) {
  const result = []

  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...flatten3(item))
    } else {
      result.push(item)
    }
  }

  return result
}
console.log(flatten3(array)) // [1, 2, 3, 4, 5, 6]

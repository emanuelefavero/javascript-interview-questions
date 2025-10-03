// * Flatten 2d array

let array = [
  [1, 2],
  [3, 4],
]

// 1 - With reduce
function flatten(array) {
  return array.reduce((acc, current) => [...acc, ...current], [])
}
console.log(flatten(array)) // [1, 2, 3, 4]

// 2 - With built-in `flat` method
function flatten2(array) {
  return array.flat(1)
}
console.log(flatten2(array)) // [1, 2, 3, 4]

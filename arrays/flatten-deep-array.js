// * Flatten Deep array

let array = [1, [2, [3, [4, 5]]], 6]

// - - - - - -

// 1 - With built-in `flat` method
function flatten(array) {
  return array.flat(Infinity)
}
console.log(flatten(array)) // [1, 2, 3, 4, 5, 6]

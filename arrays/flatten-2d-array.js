// * Flatten 2d array

let array = [
  [1, 2],
  [3, 4],
]

function flatten(array) {
  return array.reduce((acc, current) => [...acc, ...current], [])
}

console.log(flatten(array)) // [1, 2, 3, 4]

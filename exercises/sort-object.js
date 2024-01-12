// * Sort an object by its values

function sort(object) {
  let result = Object.entries(object).sort((a, b) => a[1] - b[1])
  return Object.fromEntries(result)
}

console.log(sort({ a: 5, b: 3, c: 9 })) // { b: 3, a: 5, c: 9 }

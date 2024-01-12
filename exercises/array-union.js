// * Array union - union of two arrays (values present in either one of the arrays, remove duplicates)

function union(array1, array2) {
  return [...new Set([...array1, ...array2])]
}

console.log(union([1, 3, 5, 7], [2, 3, 4, 7])) // [1, 3, 5, 7, 2, 4]

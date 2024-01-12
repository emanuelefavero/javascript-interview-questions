// * Find intersections between two arrays (values present in both arrays)

function intersections(array1, array2) {
  let result = []
  let set = new Set([...array1])

  for (let value of array2) {
    if (set.has(value)) result.push(value)
  }

  return result
}

console.log(intersections([1, 3, 5, 7], [2, 3, 4, 7])) // [3, 7]

// -----------------------------------------------
// * Solution 2

function intersections2(array1, array2) {
  let result = array1.filter((value) => array2.includes(value))
  return result
}

console.log(intersections2([1, 3, 5, 7], [2, 3, 4, 7])) // [3, 7]

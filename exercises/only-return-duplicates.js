// * Only return duplicates from an array

// * Solution 1
function getDuplicates(array) {
  return array.filter((value, index) => array.indexOf(value) !== index)
}

console.log(getDuplicates([1, 2, 2, 3, 3, 4])) // [2, 3]

// ---------------------------------------------------------------
// * Solution 2

function getDuplicates2(array) {
  let result = []
  let set = new Set()

  for (let i = 0; i < array.length; i++) {
    let value = array[i]

    if (set.has(value)) result.push(value)
    else set.add(value)
  }

  return result
}

console.log(getDuplicates2([1, 2, 2, 3, 3, 4])) // [2, 3]

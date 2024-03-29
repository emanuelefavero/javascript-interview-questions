// * Remove duplicates from an array

// * Solution 1

// O(n) time, O(n) space
function removeDuplicates(array) {
  let set = new Set(array)
  return [...set]
}

console.log(removeDuplicates([1, 2, 2, 3])) // [1, 2, 3]

// ---------------------------------------------------------------
// * Solution 2 - (Map)

// O(n) time, O(n) space
function removeDuplicates2(array) {
  let map = new Map()

  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      array.splice(i, 1)
      i-- // decrement i to account for the removed element
    } else {
      map.set(array[i], true)
    }
  }

  return array
}

console.log(removeDuplicates2([1, 2, 2, 3])) // [1, 2, 3]

// ---------------------------------------------------------------
// * Solution 3 - (filter)

// TIP: This solution uses filter() method to filter out the duplicates. It essentially checks if the index of the current element is the same as the index of the first occurrence of the element and returns the element only if it is

// O(n) time, O(n) space
function removeDuplicates3(array) {
  return array.filter((item, index) => array.indexOf(item) === index)
}

console.log(removeDuplicates3([1, 2, 2, 3])) // [1, 2, 3]

// ---------------------------------------------------------------
// * Solution 4 - slow

// O(n^2) quadratic time, O(1) space
function removeDuplicates4(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1)
      }
    }
  }

  return array
}

console.log(removeDuplicates4([1, 2, 2, 3])) // [1, 2, 3]

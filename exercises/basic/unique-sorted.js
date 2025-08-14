/*
You are given an array of numbers. Write a JavaScript function that:

Removes all duplicate values from the array.

Sorts the remaining values in ascending order.

Returns the new array.
*/

function uniqueSorted(nums) {
  let set = new Set(nums) // Remove all duplicates
  return [...set].sort((a, b) => a - b) // Return sorted array
}

console.log(uniqueSorted([4, 2, 5, 2, 1, 4])) // [1, 2, 4, 5]

// -----------------
// VARIATION

/*
Write a function that takes two arrays and returns a sorted array containing all numbers that:

Appear in both arrays (intersection).

Have no duplicates in the result.

Are sorted in ascending order.
*/

function intersectionSorted(nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let result = []

  set1.forEach((num) => {
    if (set2.has(num)) result.push(num)
  })

  return result.sort((a, b) => a - b)
}

console.log(intersectionSorted([4, 2, 5, 2, 1, 4], [5, 3, 4, 4, 2]))
// [2, 4, 5]

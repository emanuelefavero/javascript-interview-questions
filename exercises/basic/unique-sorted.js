/*
You are given an array of numbers. Write a JavaScript function that:

Removes all duplicate values from the array.

Sorts the remaining values in ascending order.

Returns the new array.
*/

function uniqueSorted(nums) {
  let set = new Set([...nums]) // Remove all duplicates
  return [...set].sort((a, b) => a - b) // Return sorted array
}

console.log(uniqueSorted([4, 2, 5, 2, 1, 4])) // [1, 2, 4, 5]

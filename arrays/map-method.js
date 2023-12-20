// * Map

// Map returns a new array with the results of calling a function for every array element

let nums = [1, 2, 3, 4]

console.log(nums.map((num) => num * num)) // [1, 4, 9, 16]

console.log(nums.map((num, index) => index)) // [0, 1, 2, 3], index of each element

// TIP: The third argument of the map method is the array itself:
// .map((num, index, array) => ...)

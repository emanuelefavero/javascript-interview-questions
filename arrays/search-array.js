// * Search an array

let fruits = ['apple', 'banana', 'apple']

console.log(fruits.indexOf('apple')) // 0
console.log(fruits.indexOf('apple', 1)) // 2, start searching from index 1
console.log(fruits.lastIndexOf('apple')) // 2, last index starts searching from the end of the array
console.log(fruits.lastIndexOf('apple', 1)) // 0, start searching from index 1 backwards
console.log(fruits.lastIndexOf('orange')) // -1
console.log(fruits.includes('banana')) // true

// NOTE: All the above methods are case sensitive (e.g. 'Apple' will not be found in the array)

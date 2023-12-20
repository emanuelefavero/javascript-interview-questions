// * Search an array

// * indexOf, lastIndexOf, includes

let fruits = ['apple', 'banana', 'apple']

console.log(fruits.indexOf('apple')) // 0
console.log(fruits.indexOf('apple', 1)) // 2, start searching from index 1

console.log(fruits.lastIndexOf('apple')) // 2, last index starts searching from the end of the array
console.log(fruits.lastIndexOf('apple', 1)) // 0, start searching from index 1 backwards
console.log(fruits.lastIndexOf('orange')) // -1

console.log(fruits.includes('banana')) // true

// NOTE: All the above methods are case sensitive (e.g. 'Apple' will not be found in the array)

// ------------------------------------------------------------
// * find, findIndex, filter

// For conditional search, you can use find, findIndex, filter

let ages = [3, 10, 18, 20, 34]

console.log(ages.find((age) => age > 18)) // 20, first element that satisfies the condition

console.log(ages.findIndex((age) => age > 18)) // 3, index of the first element that satisfies the condition

console.log(ages.filter((age) => age > 18)) // [20, 34], all elements that satisfy the condition

// NOTE: The filter method will not modify the original array

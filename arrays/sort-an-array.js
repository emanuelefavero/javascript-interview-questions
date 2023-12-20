// * Sort an Array

// * Sort an array of numbers
let nums = [3, 1, 2, 10]

// sort in ascending order
console.log(nums.sort((a, b) => a - b)) // [1, 2, 3, 10]

// convert to string and sort in ascending order
console.log(nums.sort()) // [1, 10, 2, 3]

// sort in descending order
console.log(nums.sort((a, b) => b - a)) // [10, 3, 2, 1]

// convert to string and sort in descending order
console.log(nums.sort().reverse()) // [3, 2, 10, 1]

// TIP: If the array has `undefined` values, they will be sorted to the end of the array (e.g. [1, 2, undefined, 3] will be sorted to [1, 2, 3, undefined])

// ------------------------------------------------------------
// * Sort an array of strings
let fruits = ['banana', 'apple', 'Banana', 'pear']

// sort in ascending order
console.log(fruits.sort()) // ['Banana', 'apple', 'banana', 'pear']

// sort in descending order
console.log(fruits.sort().reverse()) // ['pear', 'banana', 'apple', 'Banana']

// sort strings according to their length
console.log(fruits.sort((a, b) => a.length - b.length))
// ['pear', 'apple', 'Banana', 'banana']

// ------------------------------------------------------------
// * Sort an array of objects

let products = [
  {
    price: 3,
    productName: 'apple',
  },
  {
    price: 4,
    productName: 'banana',
  },
  {
    price: 2,
    productName: 'orange',
  },
]

// sort in ascending order
console.log(products.sort((a, b) => a.price - b.price))
/*
[
  { price: 2, productName: 'orange' },
  { price: 3, productName: 'apple' },
  { price: 4, productName: 'banana' }
]
*/

// * Map

// Map returns a new array with the results of calling a function for every array element

let nums = [1, 2, 3, 4]

console.log(nums.map((num) => num * num)) // [1, 4, 9, 16]

console.log(nums.map((num, index) => index)) // [0, 1, 2, 3], index of each element

// TIP: The third argument of the map method is the array itself:
// .map((num, index, array) => ...)
// TIP: The map method is often used to display data on a webpage (e.g. displaying a list of products) and to populate the DOM

// ------------------------------------------------------------
// QUESTIONS

// Q: Find the length of each element in the array
// A:

let fruits = ['ab', 'abc', 'abcd']

console.log(fruits.map((word) => word.length)) // [2, 3, 4]

// Q: Find the square root of each element in the array and store it in a new array
// A:

let nums2 = [1, 2, 3, 4]

console.log(nums2.map((num) => Math.sqrt(num)))
// [1, 1.4142135623730951, 1.7320508075688772, 2]

// Q: Fetch all the productName from the products array

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

console.log(products.map((e) => e.productName)) // ['apple', 'banana', 'orange']

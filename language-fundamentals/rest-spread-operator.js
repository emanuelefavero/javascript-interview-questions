// * Rest Operator
// The rest operator is used to represent an indefinite number of arguments as an array
function sum(...args) {
  // TIP: The rest operator converts the arguments into an array
  return args.reduce((a, b) => a + b, 0)
}

console.log(sum(1, 2, 3)) // 6

// TIP: The Rest Operator cannot be used as the first argument
// function sum(...args, a) {} will throw an error

// TIP: The Rest Operator can be used to get the remaining arguments
function multiply(multiplier, ...args) {
  return args.map((arg) => multiplier * arg)
}

console.log(multiply(2, 1, 2, 3)) // [2, 4, 6], since 2 is the multiplier and the rest of the arguments are multiplied by 2 (2 * 1, 2 * 2, 2 * 3)

// * Spread Operator
// The spread operator is used to expand an array into its individual elements
let arr = [1, 2, 3]
console.log(...arr) // 1 2 3

// TIP: The spread operator can be used to copy an array
let arr2 = [...arr]
console.log(arr2) // [1, 2, 3]

// NOTE: arr2 !== arr, since they are two different arrays. If you need to later check if two arrays are equal, you should assign them to variables and compare the variables instead (e.g. let arr3 = arr2)

// TIP: The spread operator can be used to concatenate arrays
let arr3 = [...arr, ...arr2]
console.log(arr3) // [1, 2, 3, 1, 2, 3]

// * Arguments Object
// The arguments object is an array-like object that contains the arguments passed to a function
function test() {
  console.log(arguments)
}

test(1, 2, 3) // [1, 2, 3]

// NOTE: You can't use the arguments object with arrow functions

// * QUESTIONS

// Q: Can we use arguments object in arrow function?
// A: No, we cannot

// Q: How can you have 'n' number of parameters in a function?
// A: Using the rest operator

// Q: Can the rest operator be used as the first argument?
// A: No, it cannot

let fruits = ['banana', 'mango']

// * Add element to the END
fruits.push('orange')

// * Add element to the START
fruits.unshift('apple')

// * Remove element from the END
fruits.pop()

// * Remove element from the START
fruits.shift()

// * Insert element at position 1
fruits.splice(1, 0, 'cherry') // .splice(start, deleteCount, item)

// * Remove element at position 1
fruits.splice(1, 1)

// * Update element at position 1
fruits[1] = 'pear'

// or you can use splice
fruits.splice(1, 1, 'coconut')

console.log(fruits) // [ 'banana', 'coconut' ]

// NOTE: the splice method modifies the original array, while the slice method returns a new array

// * Slice - returns a sliced array
let arr = ['a', 'b', 'c', 'd', 'e']
let sliced = arr.slice(1, 3) // .slice(start, end)
console.log(sliced) // [ 'b', 'c' ]

// ------------------------------------------------------------
// QUESTIONS

// Q: What is the difference between push and unshift?
// A: push adds an element to the end of the array, while unshift adds an element to the start of the array

// Q: What is the difference between pop and shift?
// A: pop removes an element from the end of the array, while shift removes an element from the start of the array

// Q: How can you insert an element at a specific position in an array?
// A: You can use the splice method (by passing 0 as the second argument and the element you want to insert as the third argument)

// Q: How can you remove an element at a specific position in an array?
// A: You can use the splice method (by passing 1 as the second argument)

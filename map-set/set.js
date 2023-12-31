// * Set
// Set is a new data structure introduced in ES6. It is unordered collection of UNIQUE elements. Set does not have any index or key. It is similar to an array but with some differences

// Create a new Set
const mySet = new Set()

// Add elements to the Set
mySet.add('apple')
mySet.add('banana')
mySet.add('orange')
mySet.add('apple') // duplicate elements are ignored

// Check if an element exists in the Set
const hasBanana = mySet.has('banana')
console.log(hasBanana) // true

// Get the size of the Set
const setSize = mySet.size
console.log(setSize) // 3

// Iterate over the Set using for...of loop
for (let item of mySet) {
  console.log(item)
}

// TIP: You could also use the entries(), keys() and values() methods to iterate over the Set

// Iterate over the Set using forEach method
mySet.forEach((item) => console.log(item)) // apple, banana, orange

// Remove an element from the Set
mySet.delete('orange')

// Clear all elements from the Set
mySet.clear()

// ---------------------------------------------------------------
// You can also create a Set from an array
const setFromArray = new Set(['apple', 'banana', 'orange', 'apple'])
console.log(setFromArray) // Set(3) {"apple", "banana", "orange"}

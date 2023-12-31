// * Map
// Map is a collection of key-value pairs. Maps can have any type of key and value

// TIP: JavaScript objects can only have string keys, but maps can have keys of any type

let product = new Map()

// Add key-value pairs to the map
product.set('name', 'iPhone')

// TIP: Since the set method returns the map, we can chain the set method
product.set(1, 'Apple').set(true, 'Available')

console.log(product)
// Map(3) {"name" => "iPhone", 1 => "Apple", true => "Available"}

// Get the value of a key
console.log(product.get(1)) // Apple
console.log(product.get('name')) // iPhone
console.log(product.get(true)) // Available

// Map has the size property, objects don't. The size property returns the number of key-value pairs in the map
console.log(product.size) // 3

// ---------------------------------------------------------------
// * Map is iterable

// 1. Using for-of loop
for (let [key, value] of product) {
  console.log(key, value) // name iPhone, 1 Apple, true Available
}

// 2. Using forEach method
product.forEach((value, key) => {
  console.log(key, value) // name iPhone, 1 Apple, true Available
})

// 3. Using keys method
for (let key of product.keys()) {
  console.log(key) // name, 1, true
}

// 4. Using values method
for (let value of product.values()) {
  console.log(value) // iPhone, Apple, Available
}

// 5. Using entries method
for (let [key, value] of product.entries()) {
  console.log(key, value) // name iPhone, 1 Apple, true Available
}

// ---------------------------------------------------------------
// * Convert map to array

// 1. Using spread operator
console.log([...product])
// [["name", "iPhone"], [1, "Apple"], [true, "Available"]]

// 2. Using Array.from method
console.log(Array.from(product))

// ---------------------------------------------------------------
// Convert object to map
let obj = {
  name: 'iPhone',
  price: 1000,
  available: true,
}

let map = new Map(Object.entries(obj))
console.log(map)
// Map(3) {"name" => "iPhone", "price" => 1000, "available" => true}

// ---------------------------------------------------------------
// * Convert map to object

let obj2 = Object.fromEntries(product)
console.log(obj) // {name: "iPhone", price: 1000, available: true}

// ---------------------------------------------------------------
// has() method - Check if a key exists in the map

console.log(product.has('name')) // true

// ---------------------------------------------------------------
// delete() method - Delete a key-value pair from the map

product.delete('name')
console.log(product.has('name')) // false

// ---------------------------------------------------------------
// clear() method - Delete all key-value pairs from the map

product.clear()
console.log(product.size) // 0
console.log(product) // Map(0) {}

// ---------------------------------------------------------------
// QUESTIONS

// Q: What are the advantages of using Map over object?
// A: Maps can have keys of any type, objects can only have string keys. Maps are iterable, objects are not. Maps have size property, objects don't. Map is more optimized for frequent addition and removal of key-value pairs

// Q: How can you iterate over a map?
// A: Using for-of loop, forEach method, keys method, values method, entries method

// A: Can you assign key/values pair to a map with this syntax? product['name'] = 'iPhone'
// A: Yes, but it's not recommended. It's better to use the set method since keys will be converted to strings this way

// Q: How can you convert an object to a map?
let newMap = new Map(Object.entries(obj))
// A: Using Object.entries method

// Q: How can you convert a map to an object?
let newObj = Object.fromEntries(product)
// A: Using Object.fromEntries method

// Q: How can you remove an item or all items from a map?
// A: using the delete() and clear() methods

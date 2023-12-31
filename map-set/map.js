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

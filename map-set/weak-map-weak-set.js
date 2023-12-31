// * Weak Map and Weak Set
// Map and Set hold the keys and values in memory even if they are not used anywhere else in the code. This can lead to memory leaks. To avoid this, ES6 introduced WeakMap and WeakSet. WeakMap and WeakSet are similar to Map and Set but they hold the keys and values weakly. This means that if there are no references to the keys and values, they will be garbage collected.

// * Weak Map
// Keys in WeakMap can only be objects, not primitive values like strings, numbers, etc...
// Weak Map is not iterable

// Create a new WeakMap
let weakMap = new WeakMap()

// Add elements to the WeakMap
let obj = {}
weakMap.set(obj, 'hello')
console.log(weakMap.get(obj)) // hello

// * Weak Set
// Weak Set are similar to WeakMap.

// Create a new WeakSet
let weakSet = new WeakSet()

// Add elements to the WeakSet
let obj2 = {}
weakSet.add(obj2)
console.log(weakSet.has(obj2)) // true

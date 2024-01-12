// * Check wether the given argument is an array or not

console.log(Array.isArray([1, 2])) // true
console.log(Array.isArray('hello')) // false

// TIP: typeof operator returns 'object' for arrays because arrays are objects in JavaScript
console.log(typeof [1, 2]) // object

// TIP: You can also use instanceof operator to check if an object is an array or not
console.log([1, 2] instanceof Array) // true

// TIP: You can also use Object.prototype.toString.call() method to check if an object is an array or not
if (toString.call([1, 2]) === '[object Array]') console.log('true')
else console.log('false')

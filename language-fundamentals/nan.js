// * NaN means Not a Number
// You will get NaN when you try to perform a mathematical operation on a string or a value that cannot be converted to a number
console.log(1 / 'hello') // NaN

// isNaN() is a function that checks if a value is NaN
console.log(isNaN(1 / 'hello')) // true

// TIP: You can't use NaN directly to check if a value is NaN since NaN is a unique value
console.log(NaN === NaN) // false

// TIP: You can also use isFinite() to check if a value is NaN
console.log(isFinite(1 / 'hello')) // false, isFinite() checks if a value is a regular number or not

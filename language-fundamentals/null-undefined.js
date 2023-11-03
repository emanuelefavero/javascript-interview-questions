// * Difference Between null and undefined

// Q: What is undefined?

let x
console.log(typeof x) // undefined

// A: Undefined means a variable has been declared, but the value of that variable has not yet been defined

// ---------------------------------------------------------------

// Q: What is null?

let y = null
console.log(y) // null

// A: Null is an assignment value. It can be assigned to a variable as a representation of no value

// TIP: When you check the type of null it returns an object which is an error in the language. Null is not an object but a primitive value
console.log(typeof y) // object

// ---------------------------------------------------------------

// Q: What will be the output of the following code? Why?

console.log(undefined == null) // true
console.log(undefined === null) // false

// A: Both null and undefined represent empty values so when you compare them with the equality operator == they are equal.
// However, since they are not the same type, when you compare them with the strict equality operator === they are not equal

// ---------------------------------------------------------------

// Q: Can you explicitly assign undefined to a variable?

let z = undefined
console.log(z) // undefined

// A: Yes

// TIP: It is better to use null for assignment to a variable to represent empty values since it behaves similarly to other languages and is less prone to errors
// TIP: When you don't specify a value when declaring a variable it is automatically assigned undefined
let a
console.log(a) // undefined

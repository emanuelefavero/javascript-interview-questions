// Create a safe copy of an object
let obj = { name: 'John', age: 32 }
let copy = { ...obj }
copy.name = 'Jack'
console.log(obj) // { name: 'John', age: 32 }

// ------------------------------------------------------------
// NOTE: If you do the following, the copy will be a reference to the original object, so changing the copy will change the original object!!!
obj = { name: 'John', age: 32 }
copy = obj
copy.name = 'Jack'
console.log(obj) // { name: 'Jack', age: 32 }

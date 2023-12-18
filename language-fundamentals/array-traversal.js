// * Difference between for...in and for...of

let arr = ['hello', 'hola', 'ciao']

// for...in iterates over the keys of an object
for (let i in arr) {
  console.log(i) // 0, 1, 2
}

// for...of iterates over the values of an iterable object
for (let val of arr) {
  console.log(val) // 'hello', 'hola', 'ciao'
}

// ------------------------------------------------------------
// * forEach

// forEach is a method on the Array prototype that allows you to iterate over the elements of an array
arr.forEach((val, index) => {
  console.log(val, index) // 'hello', 0, 'hola', 1, 'ciao', 2
})

// BEWARE: forEach does not return anything, so you cannot chain it with other methods and also it does not allow you to break out of the loop midway
// TIP: It is recommended to use forEach when you want to iterate over an array and do something with each element (it is really useful in React when you want to render a list of elements)
// TIP: When solving a ds and algo problem, you should use a for loop instead of forEach

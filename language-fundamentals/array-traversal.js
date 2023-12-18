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

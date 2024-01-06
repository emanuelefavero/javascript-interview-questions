// * Promise.all() - returns a single Promise that resolves when all of the promises passed as an iterable have resolved or when the iterable contains no promises

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data 1'), 500)
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data 2'), 500)
})

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data 3'), 500)
})

Promise.all([promise1, promise2, promise3]).then((data) => console.log(data))
// ['Data 1', 'Data 2']

// TIP: If any of the passed promises rejects, Promise.all asynchronously rejects with the value of the promise that rejected, whether or not the other promises have resolved.

// ------------------------------------------------------------
// * Promise.allSettled() - returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise
promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data 1'), 500)
})

promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error'), 500) // Error
})

promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data 3'), 500)
})

Promise.allSettled([promise1, promise2, promise3]).then((data) =>
  console.log(data)
)
/*
[
  { status: 'fulfilled', value: 'Data 1' },
  { status: 'rejected', reason: 'Error' },
  { status: 'fulfilled', value: 'Data 3' }
]
*/

// ------------------------------------------------------------
// * Promise.race() - returns the first promise that resolves or rejects regardless of the order in the array

promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data 1'), 600)
})

promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error'), 600) // Error
})

promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data 3'), 500)
})

Promise.race([promise1, promise2, promise3]).then((data) => console.log(data))
// Data 3

// ------------------------------------------------------------
// QUESTIONS

// Q: What will be the output of the following code?
let a = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Data a'), 500)
)
let b = 'Data b (not a promise)'

Promise.all([a, b]).then((data) => console.log(data))
// ['Data a', 'Data b (not a promise)']
// A: The value of b is not a promise, but Promise.all() accepts any iterable, so it will be wrapped in a resolved promise.

// Q: How can you handle multiple rejected promises in an efficient way?
// A: By using Promise.allSettled()

// Q: Explain the purpose of Promise.race()
// A: It returns the first promise that resolves or rejects regardless of the order in the array

// Q: What will be the output of the following code?
let pr = Promise.race([])
console.log(pr) // Promise { <pending> }
// A: The promise will be pending forever because there are no promises to resolve or reject

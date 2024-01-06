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

// * Promise - then
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// Example 1
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data')
  }, 1000)

  // TIP: comment previous line and uncomment next to see the result
  // reject('Error')
})

promise
  .then((message) => console.log(message)) // Data
  .catch((error) => console.log(error))
  .finally(() => console.log('Final process'))

// Example 2
function sqrt(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(a * a), 1000)
  })
}

sqrt(2).then((result) => console.log(result)) // 4

// * Chain promises - by returning a promise inside a then, we can chain promises
sqrt(2)
  .then((result) => {
    console.log(result) // 4
    return sqrt(result)
  })
  .then((result) => {
    console.log(result) // 16
  })

// * Callback function - a function that is passed to another function as a parameter and is executed after some operation has been completed

// Example 1
function fetchData(callback) {
  setTimeout(() => {
    let data = 'Data fetched'
    callback(data)
  }, 1000)
}

fetchData((data) => {
  console.log(data)
})

// Example 2
function sqrt(num, callback) {
  setTimeout(() => {
    callback(num * num)
  }, 1000)
}

sqrt(2, (result) => {
  console.log(result)
})

// TIP: These days callbacks are not used much. Instead, we use promises and async/await.
// TIP: Callback hell - when we have a lot of nested callbacks. This is a common problem with callbacks

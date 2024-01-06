// * Async/Await - async/await is a new way to write asynchronous code. It is built on top of promises and non-blocking

// Example
async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched'), 1000)
  })

  let data = await promise
  console.log(data)
}

fetchData() // Data fetched

// TIP: You can also use .then() with async/await

// * Fetch data from an API
async function fetchUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users'

  let response = await fetch(url)
  let data = await response.json()
  console.log(data)
}

fetchUsers()
/*
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    ...
  },
  ...
]
*/

// TIP: you can use try/catch block to handle errors

// ------------------------------------------------------------
// QUESTIONS

// Q: Can you write await without async?
// A: No, await can only be used inside an async function

// Q: Do you need to return a promise from an async function?
// A: No, you can return any value from an async function. It will be wrapped in a promise automatically

// Q: Can you create an async IIFE (Immediately Invoked Function Expression)?
// A: Yes

// Q: How can you handle errors with async/await?
// A: By using try/catch block

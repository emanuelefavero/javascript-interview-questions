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

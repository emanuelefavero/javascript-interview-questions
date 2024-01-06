// * The Fetch API

// The Fetch API is a JavaScript interface for making network requests, providing a more efficient and flexible alternative to XMLHttpRequest. It is promise-based, allowing for simpler and cleaner asynchronous code

// Example
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data[0].name)) // Leanne Graham

// ------------------------------------------------------------
// * Fetch data from an API

// TIP: It is not necessary to use async/await with fetch, but it makes the code cleaner sometimes

async function fetchUsers() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await response.json()

  data.forEach((user) => console.log(user.name)) // Leanne Graham, ...
}

fetchUsers()

// ------------------------------------------------------------
// * Make a POST request with fetch

async function postData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'my title',
      body: 'my text',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  let data = await response.json()
  console.log(data)
}

postData()
// {title: "my title", body: "my text", userId: 1, id: 101}

// TIP: To get the status code of the response, you can use response.status or response.ok

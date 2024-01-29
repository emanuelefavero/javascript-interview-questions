// * Get minified object
// This is simply a technique to get a subset of an object's properties

const user = {
  name: 'John',
  age: 32,
  address: {
    street: '123 Main St',
    city: 'San Francisco',
  }
}

function getMinifiedUser(user) {
  return {
    name: user.name,
    ...user.address
  }
}

console.log(getMinifiedUser(user)) 
// { name: 'John', street: '123 Main St', city: 'San Francisco' }

// * Iterate through built in data structures
// ARRAYS
let array = [1, 2, 3]

// 1 - classic for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i]) // 1, 2, 3
}

// 2 - iterate through values of an array
for (let value of array) {
  console.log(value) // 1, 2, 3
}

// 3 - iterate through indexes of an array
for (let i in array) {
  console.log(i) // 0, 1, 2
}

// 4 - iterate through values of an array using forEach
array.forEach((value) => {
  console.log(value) // 1, 2, 3
})

// 5 - iterate through values of an array using map
array.map((value) => {
  console.log(value) // 1, 2, 3
})

// OBJECTS
let obj = {
  name: 'John',
  age: 30,
}

// 1 - iterate through values of an object
for (let key in obj) {
  console.log(obj[key]) // John, 30
}

// 2 - iterate through keys of an object
for (let key in obj) {
  console.log(key) // name, age
}

// 3 - iterate through values of an object using Object.values
Object.values(obj).forEach((value) => {
  console.log(value) // John, 30
})

// 4 - iterate through keys of an object using Object.keys
Object.keys(obj).forEach((key) => {
  console.log(key) // name, age
})

// 5 - iterate through keys and values of an object using Object.entries
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value) // name John, age 30
})

// 6 - iterate through keys and values of an object using Object.entries and map
Object.entries(obj).map(([key, value]) => {
  console.log(key, value) // name John, age 30
})

// * Iterables and Iterators
// Symbol.iterator is a well-known symbol that represents the iteration method of an object.
// TIP: It can be used to make an object iterable, which means that it can be used in a for...of loop.

// Make an object iterable using Symbol.iterator
let obj = {
  start: 10,
  end: 12,

  // Make the object iterable
  [Symbol.iterator]() {
    let currentValue = this.start
    const self = this

    // TIP: The iterator method returns an object with a next method
    return {
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue++,
        }
      },
    }
  },
}

// Iterate through the object
for (let value of obj) {
  console.log(value) // 10, 11, 12
}

// QUESTIONS
// Q: What is the purpose of the iterator?
// A: The purpose of the iterator is to make ia data structure (such as a object) iterable so that we can use it in a for...of loop

// Q: How do you create an iterator?
// A: The Symbol.iterator method should return an iterator object with a next method that returns an object with two properties: done and value
// Example: { done: false, value: 1 }

// TIP: The `done: true` will stop the iteration

// Q: explain a real world use case of iterators
// A: For instance if you are creating a library and one of your object needs to be iterable, you can use the iterator to make it iterable

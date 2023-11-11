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

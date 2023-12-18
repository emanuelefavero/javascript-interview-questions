let fruits = ['banana', 'mango']

// * Add element to the END
fruits.push('orange')

// * Add element to the START
fruits.unshift('apple')

// * Remove element from the END
fruits.pop()

// * Remove element from the START
fruits.shift()

// * Insert element at position 1
fruits.splice(1, 0, 'cherry') // .splice(start, deleteCount, item)

// * Remove element at position 1
fruits.splice(1, 1)

// * Update element at position 1
fruits[1] = 'pear'

// or you can use splice
fruits.splice(1, 1, 'coconut')

console.log(fruits)

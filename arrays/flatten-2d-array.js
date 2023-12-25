// * flatten 2d array

let arr = [2, 4, 3]

console.log(arr.reduce((acc, val) => acc + val, 0)) // 9
// Explanation: 2 + 4 + 3 = 9

// index as an argument
console.log(arr.reduce((acc, val, index) => acc + index, 0)) // 3
// Explanation: 0 + 1 + 2 = 3

// use an array as the initial value
console.log(
  arr.reduce((acc, val) => {
    acc.push(val * 2)
    return acc
  }, [])
) // [4, 8, 6]
// Explanation: [2 * 2, 4 * 2, 3 * 2] = [4, 8, 6]

// * reduceRight
// reduceRight is the same as reduce, but it starts from the end of the array

console.log(
  arr.reduceRight((acc, val) => {
    acc.push(val * 2)
    return acc
  }, [])
) // [6, 8, 4]

// * QUESTIONS

// Q: How do you flatten a 2d array?

let arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
]

console.log(
  arr2.reduce((acc, current) => {
    return acc.concat(current)
  })
) // [1, 2, 3, 4, 5, 6]

// A: Use reduce and concat

// Q: Get sum of a key field in an array of objects

const employees = [
  { name: 'Jane Doe', salary: 60000 },
  { name: 'Jim Doe', salary: 70000 },
]

console.log(employees.reduce((acc, current) => acc + current.salary, 0))
// 130000

// A: access the key field with current.salary

// Q: Find average of all elements in an array

let arr3 = [1, 2, 3, 4, 5]

let average = arr3.reduce((acc, current, index, array) => {
  acc += current

  if (index === array.length - 1) {
    return acc / array.length
  }

  return acc
}, 0)

console.log(average) // 3
// Explanation: (1 + 2 + 3 + 4 + 5) / 5 = 3

// A: Divide the sum of all elements by the length of the array

// Q: What is the difference between reduce() and reduceRight()?
// A: reduce() starts from the beginning of the array, while reduceRight() starts from the end of the array

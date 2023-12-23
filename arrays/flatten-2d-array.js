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

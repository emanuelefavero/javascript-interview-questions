// * Deduplicate (Remove duplicates from array)

const array = [1, 2, 2, 3, 3]

// - - - - - -

// 1 - With a set
function deduplicate(array) {
  const set = new Set([...array])
  return [...set]
}
console.log(deduplicate(array)) // [1, 2, 3]

// 2 - With a map
function deduplicate2(array) {
  const map = new Map()
  const result = []

  for (const num of array) {
    if (!map.has(num)) result.push(num)
    map.set(num, true)
  }

  return result
}
console.log(deduplicate2(array)) // [1, 2, 3]

// 3 - With an object
function deduplicate3(array) {
  const hash = {}
  const result = []

  for (const num of array) {
    if (hash[num] === undefined) result.push(num)
    hash[num] = true
  }

  return result
}
console.log(deduplicate3(array)) // [1, 2, 3]

// 4 - With filter and indexOf
/*
? Why use indexOf?
- indexOf(num) finds the first occurrence of num.
- By comparing it to the current index, we ensure only the first occurrence is included in the result.
*/
function deduplicate4(array) {
  return array.filter((num, index) => array.indexOf(num) === index)
}
console.log(deduplicate4(array)) // [1, 2, 3]

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
  let map = new Map()
  let result = []

  for (const num of array) {
    if (!map.has(num)) result.push(num)
    map.set(num, true)
  }

  return result
}
console.log(deduplicate2(array)) // [1, 2, 3]

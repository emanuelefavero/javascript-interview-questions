// * Deduplicate (Remove duplicates from array)

const array = [1, 2, 2, 3, 3]

// - - - - - -

// 1 - With a set
function deduplicate(array) {
  const set = new Set([...array])
  return [...set]
}
console.log(deduplicate(array))

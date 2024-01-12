// * Remove falsy values (null, undefined, 0, NaN, '') from an array

// TIP: To remove falsy values from an array, you can check if the value is truthy or falsy and return only the truthy values

// O(n) time, O(n) space
function remove2(array) {
  let result = []
  for (let value of array) {
    if (value) result.push(value) // check if the value is truthy
  }

  return result
}

console.log(remove2([1, null, 2, undefined, 0, NaN, '', 'ciao']))
// [1, 2, 'ciao']

// ---------------------------------------------------------------
// * Solution 2

// O(n) time, O(n) space
function remove(array) {
  return array.filter((item) => item)
}

console.log(remove([1, null, 2, undefined, 0, NaN, '', 'ciao']))
// [1, 2, 'ciao']

// ---------------------------------------------------------------
// * Solution 3

// TIP: The !! operator coerces the value to a boolean and ensures that it is truthy or falsy

// O(n) time, O(n) space
function remove3(array) {
  return array.filter((item) => !!item)
}

console.log(remove3([1, null, 2, undefined, 0, NaN, '', 'ciao']))
// [1, 2, 'ciao']

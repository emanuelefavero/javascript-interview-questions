// * Get the factorial of a number

// TIP: The factorial of a number is the product of all the integers from 1 to that number. For example, the factorial of 4 is 24, since 4 * 3 * 2 * 1 = 24

// O(n) time, O(1) space
function factorial(n) {
  if (n <= 1) return 1

  return n * factorial(n - 1)
}

console.log(factorial(4)) // 24, since 4 * 3 * 2 * 1 = 24

// ---------------------------------------------------------------
// * Solution 2

function factorial2(n) {
  let result = 1

  while (n >= 1) {
    result = result * n--
  }

  return result
}

console.log(factorial2(4)) // 24

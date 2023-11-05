// * Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well

function mySqrt(x) {
  let i = 0

  while (i * i <= x) {
    i++
  }

  return i - 1
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses built in methods to solve the problem
function mySqrt2(x) {
  return Math.floor(Math.sqrt(x))
}

// -------------------------
// TESTS

// Solution 1
console.log(mySqrt(4)) // 2
console.log(mySqrt(8)) // 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned

// Solution 2
console.log(mySqrt2(4)) // 2
console.log(mySqrt2(8)) // 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned

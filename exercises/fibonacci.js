// * Fibonacci

function fibonacci(n) {
  if (n <= 1) return n

  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(7)) // 13, 0 + 1 + 1 + 2 + 3 + 5 + 8

// -----------------------------------------------
// * Solution 2 (with memoization)

function fibonacci2(n, memo = {}) {
  if (n <= 1) return n

  if (!memo[n]) {
    memo[n] = fibonacci2(n - 1, memo) + fibonacci2(n - 2, memo)
  }

  return memo[n]
}

console.log(fibonacci2(7)) // 13, 0 + 1 + 1 + 2 + 3 + 5 + 8

// -----------------------------------------------
// * Solution 3 (iterative, without recursion)

// TIP: We will use a while loop

function fibonacci3(n) {
  if (n <= 1) return n

  let result = [0, 1]

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }

  return result[result.length - 1] // return last element
}

console.log(fibonacci3(7)) // 13, 0 + 1 + 1 + 2 + 3 + 5 + 8

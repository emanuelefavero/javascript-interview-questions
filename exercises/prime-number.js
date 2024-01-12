// * Check if a number is a prime number

// TIP: A prime number is a number that is only divisible by 1 and itself

function isPrime(n) {
  if (n < 2) return false // if n is less than 2, it's not a prime number

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false // if n is divisible by i, it's not a prime number
  }

  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(2)) // true
console.log(isPrime(6)) // false

// prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...

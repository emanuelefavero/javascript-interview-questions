// * Reverse a number

function reverse(number) {
  let reversed = number.toString().split('').reverse().join('')
  return parseInt(reversed)
}

console.log(reverse(123)) // 321

// ----------------------------------------------------------
// * Solution 2

// TIP: We will reverse a number without converting it to a string

function reverse2(number) {
  let reversed = 0

  while (number > 0) {
    reversed = reversed * 10 + (number % 10)
    number = Math.floor(number / 10)
  }

  return reversed
}

console.log(reverse2(123)) // 321

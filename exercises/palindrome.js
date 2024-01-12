// * Check if a number is palindrome

// O(n)
function isPalindrome(number) {
  let reversed = number.toString().split('').reverse().join('')
  return reversed === number.toString()
}

console.log(isPalindrome(12321)) // true
console.log(isPalindrome(12345)) // false

// ----------------------------------------------------------
// * Solution 2 (more efficient, only goes through half of the number digits)

// O(n/2) => O(n)
function isPalindrome2(number) {
  let array = number.toString().split('')

  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) return false
  }

  return true
}

console.log(isPalindrome2(12321)) // true
console.log(isPalindrome2(12345)) // false

// ----------------------------------------------------------
// * Solution 3 (without converting to string)

// O(n/2) => O(n)
function isPalindrome3(number) {
  let reversed = 0
  let original = number

  while (number > 0) {
    reversed = reversed * 10 + (number % 10)
    number = Math.floor(number / 10)
  }

  return reversed === original
}

// Explanation:
// 1. We get the last digit of the number with number % 10
// 2. We add it to reversed * 10 to move the digits to the left
// 3. We divide the number by 10 to remove the last digit
// 4. We repeat the process until the number is 0

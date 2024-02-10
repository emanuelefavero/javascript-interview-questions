// * Validate if a string is palindrome

// TIP: We will use regex to remove non-alphanumeric characters and convert the string to lowercase

function isPalindrome(string) {
  const regex = /[\W_]/g // \W matches any non-word character
  const cleanedString = string.replace(regex, '').toLowerCase()
  const reversedString = cleanedString.split('').reverse().join('')

  return cleanedString === reversedString
}

// ------------------------------------------------
// TESTS

console.log(isPalindrome('radar')) // true
console.log(isPalindrome('hello')) // false

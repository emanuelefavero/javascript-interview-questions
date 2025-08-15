// * First Non-Repeating Character

// Write a function that takes a string and returns the first character that does not repeat anywhere in the string. If all characters repeat, return null.

function firstNonRepeating(string) {
  let map = new Map()

  for (const char of string) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  for (const char of string) {
    if (map.get(char) === 1) {
      return char
    }
  }

  return null
}

console.log(firstNonRepeating('javascript')) // "j"
console.log(firstNonRepeating('aabbcc')) // null

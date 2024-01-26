// * Convert a Roman numeral to an integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Simply speaking, the roman numerals in standard form follow these rules.

1. symbols are listed from highest to lowest, from left to right
2. from left to right, if the next symbol value is bigger than current one, it means subtracting, otherwise adding
*/

/**
 * @param {string} str
 * @returns {number}
 */

// O(n) time | O(1) space
function romanToInteger(str) {
  const hash = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])

  let result = 0
  for (let i = 0; i < str.length; i++) {
    let current = hash.get(str[i])
    let next = i + 1 < str.length ? hash.get(str[i + 1]) : 0 // if there is no next, set it to 0

    // if current is less than next, subtract current from result
    if (current < next) result -= current
    else result += current
  }

  return result
}

console.log(romanToInteger('CXXIII')) // 123
console.log(romanToInteger('MCMXCIX')) // 1999
console.log(romanToInteger('C')) // 100

// * Leap Year
// Given a year, determine whether it is a leap year. If it is a leap year, return the Boolean true, otherwise return false

// A leap year is either:
// - divisible by 400
// - divisible by 4 and not 100

function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

console.log(isLeapYear(2020)) // true
console.log(isLeapYear(2021)) // false

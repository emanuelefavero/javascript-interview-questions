// * Date() object

// There are 4 ways to create a new date object:

// new Date()
let date1 = new Date()
console.log(date1) // 2023-12-27T07:34:30.124Z
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

// ----------------------------------------------------------

/**
 * * getMonthName - return the name of the month
 *
 * @param {number} month - month number
 * @returns {string} - month name
 */

function getMonthName(month) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'Jun',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return months[month]
}

console.log(getMonthName(date1.getMonth()))

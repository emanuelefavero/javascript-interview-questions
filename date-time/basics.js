// * Date() object

// * There are 4 ways to create a new date object:

// * 1. new Date()
let date1 = new Date()
console.log(date1) // 2023-12-27T07:34:30.124Z

// NOTE: to use local time instead of UTC, use the following:
console.log(date1.toLocaleString()) // 12/27/2023, 1:34:30 PM

// * 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)
let date2 = new Date(2024, 11, 25)
console.log(date2.toLocaleString()) // 12/25/2024, 12:00:00 AM

// * 3. new Date(milliseconds) - if you only pass one parameter, it will be treated as milliseconds
let date3 = new Date(0)
console.log(date3) // 1970-01-01T00:00:00.000Z

date3 = new Date(1703666042970) // ? 2023-12-27 in milliseconds
console.log(date3) // 2024-12-25T00:07:22.970Z

// * 4. new Date(date string) - if you pass a date string, it will be treated as a date (month here is 1-12, not 0-11)
let date4 = new Date('2024-12-25')
console.log(date4) // 2024-12-25T00:00:00.000Z

// you can also add time to the date string ('YYYY-MM-DDtHH:mm:ssz')
date4 = new Date('2024-12-25T13:00:00Z') // ? the z at the end means UTC time and is needed for the date to be parsed correctly on all browsers
console.log(date4) // 2024-12-25T13:00:00.000Z

// ----------------------------------------------------------

// * get today's date milliseconds
let today = new Date()
console.log(today.getTime())

// * get christmas date milliseconds
let christmas = new Date(2024, 11, 25)
console.log(christmas.getTime())

// * get the difference between today and christmas in days
let diff = christmas.getTime() - today.getTime()
let diffDays = Math.floor(diff / (1000 * 3600 * 24))
console.log(diffDays)

// ----------------------------------------------------------

/**
 * * getMonthName - return the name of the month
 *
 * @param {number} month - month number (0-11)
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

// ----------------------------------------------------------

/**
 * * getDayName - return the name of the week day
 *
 * @param {number} day - day number (0-6)
 * @returns {string} - day name (Sunday, Monday, etc.)
 */

function getDayName(day) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return days[day]
}

console.log(getDayName(date1.getDay())) // Wednesday

// ----------------------------------------------------------
// QUESTIONS

// Q: Explain different ways to create a date object.
// A: new Date(), new Date(year, month, day, hours, minutes, seconds, milliseconds), new Date(milliseconds), new Date(date string)

// Q: What will be the output of the following code?
let d = new Date(2007, 7, 1)
console.log(d.toLocaleString())
// A: 8/1/2007, 12:00:00 AM

// Q: Explain the format of ISO standard followed by JavaScript
// A: YYYY-MM-DDTHH:mm:ss.sssZ
// where T is the separator between the date and the time, Z is the time zone (UTC) and .sss is the milliseconds

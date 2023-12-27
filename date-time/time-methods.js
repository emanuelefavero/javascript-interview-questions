let date = new Date()

console.log(date.toLocaleTimeString()) // 11:01:28 AM - time in local time

// ----------------------------------------------------------

// * Return the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(Date.now()) // 1703671388130
console.log(new Date().getTime()) // 1703671388130 - same as above

// ----------------------------------------------------------

// * GET TIME METHODS

console.log(date.getHours()) // 11 - hours (0-23)
console.log(date.getMinutes()) // 5 - minutes (0-59)
console.log(date.getSeconds()) // 38 - seconds (0-59)
console.log(date.getMilliseconds()) // 135 - milliseconds (0-999)

// ----------------------------------------------------------

// * SET TIME METHODS

date.setHours(0) // 12 AM
date.setMinutes(0)
date.setSeconds(0)
date.setMilliseconds(0)

console.log(date.toLocaleTimeString()) // 12:00:00 AM

// ----------------------------------------------------------
// QUESTIONS

// Q: Calculate the difference in hours between 2 dates
let date1 = new Date('2007-12-25')
let date2 = new Date('2007-12-26')

let diff = date2 - date1
let diffHours = Math.floor(diff / (60 * 60 * 1000))
// ? 60 minutes in an hour, 60 seconds in a minute, 1000 milliseconds in a second

console.log(diffHours) // 24 - 24 hours between the 2 dates
// A: You need to get the difference between the 2 dates in milliseconds, then divide by the number of milliseconds in a day by these values (60 * 60 * 1000)

// Q: How can you change hours or minutes in a date?
// A: You can use the .setHours() and .setMinutes() methods

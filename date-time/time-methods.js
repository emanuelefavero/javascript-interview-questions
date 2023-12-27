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

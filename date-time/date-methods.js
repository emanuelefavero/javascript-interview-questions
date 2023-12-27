let date = new Date()
console.log(date) // 2023-12-27T09:12:59.648Z - date in UTC time
console.log(date.toLocaleString()) // 12/27/2023, 10:24:20 AM - date in local time

// TIP: .toLocaleString() is a good way to display dates to users since it will display the date in their local time

// * GET DATE METHODS

// * get local date methods
// ? these methods return the date in local time according to the time zone where the code is executed

console.log(date.getFullYear()) // 2023 - year
console.log(date.getMonth()) // 11 - month (0-11)
console.log(date.getDate()) // 27 - day of the month (1-31)
console.log(date.getDay()) // 3 - day of the week (0-6)

// ----------------------------------------------------------

// * get UTC date methods
// ? UTC time is the time at the zero meridian (Greenwich, England). It was called Greenwich Mean Time (GMT) until 1972

console.log(date.getUTCFullYear()) // 2023 - year
console.log(date.getUTCMonth()) // 11 - month (0-11)
console.log(date.getUTCDate()) // 27 - day of the month (1-31)
console.log(date.getUTCDay()) // 3 - day of the week (0-6)

// ----------------------------------------------------------

// * SET DATE METHODS

date.setFullYear(2007)
date.setMonth(7)
date.setDate(1)

console.log(date.toLocaleString()) // 8/1/2007, 12:00:00 AM

// ----------------------------------------------------------

// * Date.parse() - parses (converts) a date string and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

date = Date.parse('2023-12-27T09:27:39.698Z')
console.log(date) // 1703669259698

date = new Date('2023-12-27T09:27:39.698Z')
console.log(date.getTime()) // 1703669259698

// TODO get day of the week name

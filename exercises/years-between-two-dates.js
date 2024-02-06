// * Years between two dates
// Write a function that takes two dates and returns the number of years between them

function yearsBetweenTwoDates(date1, date2) {
  return Math.abs(date1.getFullYear() - date2.getFullYear())
}

console.log(
  yearsBetweenTwoDates(new Date('2020-01-01'), new Date('2021-01-01'))
) // 1

// ------------------------------------------------------------

// take account of leap years

function yearsBetweenTwoDates(date1, date2) {
  let startMilliseconds = date1.getTime()
  let endMilliseconds = date2.getTime()

  let millisecondsDifference = Math.abs(startMilliseconds - endMilliseconds)
  let yearsDifference = millisecondsDifference / (1000 * 60 * 60 * 24 * 365.25)

  // ? 365.25 takes account of leap years (365 days + 1 day every 4 years (.25))

  return Math.floor(yearsDifference)
}

console.log(
  yearsBetweenTwoDates(new Date('2020-01-01'), new Date('2021-01-01'))
) // 1

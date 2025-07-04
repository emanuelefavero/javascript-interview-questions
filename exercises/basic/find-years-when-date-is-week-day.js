/**
 * * Find all years between startYear and endYear (inclusive) where the specified date falls on the expectedDay of the week (e.g., Sunday).
 *
 * @param {number} startYear - The starting year (inclusive).
 * @param {number} endYear - The ending year (inclusive).
 * @param {number} month - The month (1-12) to check.
 * @param {number} date - The date (1-31) to check.
 * @param {string} expectedDay - The expected day of the week (e.g., 'Sunday', 'Monday', etc.).
 * @returns {number[]} - An array of years where the specified date falls on the expected day of the week.
 */

function findYearsWhenDateIsDay(startYear, endYear, month, date, expectedDay) {
  const result = []
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  for (let year = startYear; year <= endYear; year++) {
    const current = new Date(year, month - 1, date)
    const weekDay = current.getDay() // ? 0 = Sunday, 1 = Monday...
    const fWeekDay = weekDays[weekDay].toLowerCase()
    const fExpectedDay = expectedDay.trim().toLowerCase()

    if (fWeekDay === fExpectedDay) result.push(year)
  }

  return result
}

console.log(findYearsWhenDateIsDay(2014, 2050, 1, 1, 'Sunday'))
// [ 2017, 2023, 2034, 2040, 2045 ]

// ------

/*
TIP: Some other things that we could add:

- Check for invalid expectedDay input
- Check for invalid month input (1-12)
- Check for invalid date input (1-31)
- Check if the date is valid for the given month and year (e.g., February 30th is invalid):
  - if (
      current.getFullYear() === year &&
      current.getMonth() === month - 1 &&
      current.getDate() === date
    )
*/

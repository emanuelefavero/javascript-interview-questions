// * Find Years When Jan 1 is Sunday (2014?2050)

// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

/**
 * @param {number} startYear
 * @param {number} endYear
 * @returns {number[]}
 */

function getJan1thSundayYears(startYear, endYear) {
  const result = []

  for (let i = startYear; i <= endYear; i++) {
    const date = new Date(`${i}-01-01`)
    const day = date.getDay()
    if (day === 0) result.push(i) // 0 is Sunday
  }

  return result
}

console.log(getJan1thSundayYears(2014, 2050))
// [ 2017, 2023, 2034, 2040, 2045 ]
// Explanation: These are the years between 2014 and 2050 where January 1st falls on a Sunday.

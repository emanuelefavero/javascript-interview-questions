// * Calculate the number of years between two dates

function yearsBetween(date1, date2) {
  const diff = date2.getTime() - date1.getTime()
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25 // .25 accounts for leap years

  return Math.abs(Math.floor(diff / msPerYear))
}

console.log(yearsBetween(new Date('1925-01-01'), new Date('2025-01-01'))) // 100

function daysLeftBeforeChristmas() {
  const today = new Date()
  const currentYear = today.getFullYear()
  const christmas = new Date(`${currentYear}-12-25`)

  const diff = christmas.getTime() - today.getTime()

  // ? Use ceil to round up the number of days, since we want to count partial days as a full day left
  const days = Math.ceil(diff / 1000 / 60 / 60 / 24)

  // ? If today is after Christmas, the days will be negative (until Dec 31). So we can simply add 365 to get the days left until next Christmas (e.g. -6 + 365 = 359 days left)
  if (days < 0) return days + 365

  return days
}

console.log(daysLeftBeforeChristmas()) // e.g. 155

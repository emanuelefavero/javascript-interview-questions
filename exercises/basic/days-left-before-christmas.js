function daysLeftBeforeChristmas() {
  const today = new Date()
  const currentYear = today.getFullYear()
  const christmas = new Date(`${currentYear}-12-25`)

  // If today is after Christmas, set Christmas to next year
  if (today > christmas) christmas.setFullYear(currentYear + 1)

  const diff = christmas.getTime() - today.getTime()

  // ? Since we want to count partial days as a full day left, we use Math.ceil
  const days = Math.ceil(diff / 1000 / 60 / 60 / 24)
  return days
}

console.log(daysLeftBeforeChristmas()) // e.g. 155

// * Display current date and time

/* Sample output:
Today is: Tuesday
Current time is: 10 PM:30:38
*/

function currentDateAndTime(date = new Date()) {
  // Get day of the week
  let WEEK_DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  let weekDay = WEEK_DAYS[date.getDay()]

  // Get time data
  let hours = date.getHours()
  let amOrPm = hours >= 12 ? 'PM' : 'AM'
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  // Format time utility
  const format = (time) => time.toString().padStart(2, '0')

  // Formatted time
  let hours12 = hours % 12 || 12 // convert 0 -> 12
  let fMinutes = format(minutes)
  let fSeconds = format(seconds)
  let clock = `${hours12} ${amOrPm}:${fMinutes}:${fSeconds}`

  // Output
  let weekOutput = `Today is: ${weekDay}`
  let timeOutput = `Current time is: ${clock}`
  let output = `${weekOutput}\n${timeOutput}`

  return output
}

console.log(currentDateAndTime())

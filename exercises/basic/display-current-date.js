// * Display current date and time

/*
Sample output: Today is: Tuesday
Current time is: 10 PM:30:38
*/

function currentDateAndTime() {
  let now = new Date()

  // Get day of the week
  let weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  let weekDay = weekDays[now.getDay()]

  // Get hours
  let hours = now.getHours()

  // Get AM/PM
  let amOrPm = hours >= 12 ? 'PM' : 'AM'

  // Get minutes
  let minutes = now.getMinutes()

  // Get seconds
  let seconds = now.getSeconds()

  // Format time
  function format(time) {
    return time.toString().padStart(2, '0')
  }

  // Formatted time
  let hours12 = hours % 12 || 12 // convert 0 -> 12
  let fMinutes = format(minutes)
  let fSeconds = format(seconds)

  // Build Clock
  let clock = `${hours12} ${amOrPm}:${fMinutes}:${fSeconds}`

  // Output
  let weekOutput = `Today is: ${weekDay}`
  let timeOutput = `Current time is: ${clock}`
  let output = `${weekOutput}\n${timeOutput}`

  return output
}

console.log(currentDateAndTime())

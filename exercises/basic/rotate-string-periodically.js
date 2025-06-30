function rotate(str) {
  return str.slice(-1) + str.slice(0, -1)
}

function rotatePeriodically(str, time = 1000) {
  let current = str
  console.log(current)

  setInterval(() => {
    current = rotate(current)
    console.log(current)
  }, time)
}

rotatePeriodically('hello', 500)

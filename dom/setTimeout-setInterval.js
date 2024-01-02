let count = 1
setTimeout(() => {
  setInterval(function () {
    console.log(count++)

    if (count > 3) {
      clearInterval(this)
    }
  }, 500)
}, 200)

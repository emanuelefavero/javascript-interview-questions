let count = 1
setTimeout(() => {
  setInterval(function () {
    console.log(count++)

    if (count > 3) {
      clearInterval(this)
    }
  }, 500)
}, 200)

// -----------------------------
// QUESTION

// Q: What is the difference between setTimeout and setInterval?
// A: setTimeout runs a function once after a specified delay. setInterval runs a function repeatedly with a specified interval between each call.

// Q: Why can't we write document.setTimeout?
// A: Because setTimeout is a method of the window object, not the document object.

// Q: How can you stop a timer?
// A: With clearInterval or clearTimeout

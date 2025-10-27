// * Print a triangle (or tree)

// Write a JavaScript algorithm that takes an `height` as an input and prints a triangle (pyramid) with asterisks and spaces of that height

// Left Triangle
function printLeftTriangle(height) {
  let char = ''
  for (let i = 0; i <= height; i++) {
    char += '*'
    console.log(char)
  }
}

printLeftTriangle(5)

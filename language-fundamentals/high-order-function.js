// * A high-order function is a function that does at least one of the following:
// - Takes one or more functions as arguments
// - Returns a function as its result

function multiply(multiplier) {
  return (num) => num * multiplier
}

const double = multiply(2)
const triple = multiply(3)

console.log(double(5)) // 10
console.log(triple(5)) // 15

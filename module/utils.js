// This is how you export a function
export function isEven(n) {
  return n % 2 === 0
}

function isOdd(n) {
  return !(n % 2 === 0)
}

// TIP: You can also export multiple functions like this:
export { isOdd }

// TIP: You can also add aliases to your exports like this:
// export { isOdd as isOddNumber }

// TIP: You can also set a default export like this:
// export default isEven

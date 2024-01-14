// Example JavaScript Application for Debugging

function main() {
  // Set a breakpoint here and use 'Step Over'
  console.log('Starting application...')
  let result = calculate(5, 3)
  console.log('Result: ' + result)
  console.log('Application finished.')
}

function calculate(a, b) {
  let sum = add(a, b) // Set a breakpoint here and use 'Step Into'
  let product = multiply(a, b)
  return sum + product
}

function add(x, y) {
  let additionResult = x + y
  return additionResult
}

function multiply(x, y) {
  let multiplicationResult = x * y
  return multiplicationResult // Set a breakpoint here and use 'Step Out'
}

// Start the application
main()

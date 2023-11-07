// Automatic Semi-colon Insertion (ASI)
// JavaScript will automatically insert a semi-colon at the end of a line if it thinks it needs one

// Example 1 - This code will run without error since JavaScript will automatically insert a semi-colon after the first line
console.log('hello')
console.log('world');

// Example 2
let a = 10 *
2
console.log(a) // 20, since JavaScript will detect that after an operator (*) there will be other code before a semi-colon is needed

// Example 3
function object() {
  return
  {
    name: 'John'
  }
}

let obj = object()
console.log(obj) // undefined, since JavaScript will automatically insert a semi-colon after the return statement if no value is returned in the same line

// Q: Does "use strict" affect automatic semi-colon insertion?
// A: No, it does not

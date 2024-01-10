// * console.table
let arr = ['hello', 'hola', 'ciao', '안녕', 'ni hao']
console.table(arr)

/*
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'hello'  │
│    1    │  'hola'  │
│    2    │  'ciao'  │
│    3    │  '안녕'  │
│    4    │ 'ni hao' │
└─────────┴──────────┘
*/

// * console.time
console.time('timer 1')
let x = 0
console.timeEnd('timer 1')

// timer 1: 0.029ms

// * console.trace
function add(a, b) {
  return a + b
}
console.trace(add(1, 2))

/*
Trace: 3
    at Object.<anonymous> (/Users/ef/Desktop/javascript-interview-questions/0.js:28:9)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
*/

// * console.warn
console.warn('warning')

// TIP: It will output a yellow warning icon along with the message text to stderr.

// * console.error
let err = new Error('error')
console.log(err)

// TIP: console.error outputs to stderr instead of stdout. This is useful for differentiating errors from regular console output.
// TIP: stdout (Standard Output) and stderr (Standard Error) are two output streams in a computer system.
// stdout is typically used for normal program output, while stderr is typically used for error messages or diagnostics.

/*
Error: error
    at Object.<anonymous> (/Users/ef/Desktop/javascript-interview-questions/0.js:45:11)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
*/

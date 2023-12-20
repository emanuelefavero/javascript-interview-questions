// * Array Destructuring

// Extract values from arrays and store them in variables

let nums = [1, 2, 3, 4, 5]

let [a, b, c, ...others] = nums

console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
console.log(others) // [4, 5]

// ------------------------------------------------------------

// * You can also destructure a returned array from a function

function getNums() {
  return [1, 2]
}

let [x, y] = getNums()

console.log(x) // 1
console.log(y) // 2

// ------------------------------------------------------------
// * You can also skip values while destructuring

let nums2 = [1, 2, 3]

let [d, , e] = nums2

console.log(d) // 1
console.log(e) // 3

// ------------------------------------------------------------
// * You can use destructuring for swapping variables

a = 1
b = 2
;[a, b] = [b, a]

console.log(a) // 2
console.log(b) // 1

// ------------------------------------------------------------
// * You can also add a default value

let nums3 = [1]

let [f, g = 2] = nums3

console.log(f) // 1
console.log(g) // 2

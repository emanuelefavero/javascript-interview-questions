// * Map

// Map advantages over objects:
// 1. Map is iterable
// 2. Map is efficient
// 3. Map can have any type as keys

// You can't assign key/values this way with maps: `map[key] = value`

// * Convert object to map
let obj = {
  username: 'john',
}

let map = new Map(Object.entries(obj))
console.log(map) // Map(1) { 'username' => 'john' }
console.log(map.get('username')) // john
console.log(map.size) // 1

// * Convert map to object
map = new Map()
map.set('email', 'jack@email.com')

obj = {}
for (let [key, value] of map) {
  obj[key] = value
}

console.log(obj) // { email: 'jack@email.com' }
console.log(obj.email) // jack@email.com
console.log(Object.keys(obj).length) // 1

// * Weak Map
// Weak Maps are similar to Maps but they hold the keys weakly so that they can be garbage collected when there are no references to them. Also Weak Maps can't be iterated and only objects can be used as keys
let weakMap = new WeakMap()

// TIP: There are also WeakSets which are similar to WeakMaps but for Sets

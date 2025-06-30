// * Calculate the area of a triangle given its three sides

// TIP: We can use Heron's formula (@see https://en.wikipedia.org/wiki/Heron%27s_formula) to calculate the area of a triangle when we know the lengths of all three sides
// TIP: The semi-perimeter is half the perimeter of the triangle

function calculateArea(a, b, c) {
  const s = (a + b + c) / 2 // Semi-perimeter
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)) // Heron's formula
  return Number(area.toFixed(1)) // Round to 1 decimal place
}

console.log(calculateArea(5, 6, 7))

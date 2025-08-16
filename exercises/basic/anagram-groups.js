// * Anagram Groups

// Write a function that takes an array of strings and groups them into arrays of anagrams.

// Definition: Two words are anagrams if they contain the same letters in a different order

function groupAnagrams(words) {
  const anagramMap = new Map()

  for (const word of words) {
    const sorted = word.split('').sort().join('')

    if (!anagramMap.has(sorted)) {
      // Set up a new array for this sorted key if it doesn't exist
      // TIP: Since all anagrams are sorted, a new map key will be created only for new anagram groups
      anagramMap.set(sorted, [])
    }

    // Push the original word into the corresponding array
    anagramMap.get(sorted).push(word)
  }

  return Array.from(anagramMap.values())
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// [["eat","tea","ate"], ["tan","nat"], ["bat"]]

let array = ['hello', 'ciao']

// TIP: You can assign labels to loops or blocks of code
Outer: for (let i = 0; i < array.length; i++) {
  Inner: for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j])

    if (array[i][j] === 'e') break Outer
  }
}

// Output: h e

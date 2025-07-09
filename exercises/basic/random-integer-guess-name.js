// * Random Integer Guess Game

import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function play() {
  // Prompt the user for a number
  rl.question('Guess a number between 1 and 10: ', (num) => {
    // Validate the input
    if (isNaN(num) || num < 1 || num > 10) {
      console.log('Please enter a valid number between 1 and 10.')
      play()
      return
    }

    // Generate a random number between 1 and 10
    const random = Math.floor(Math.random() * 10) + 1 // 1 to 10

    // Check if the guessed number matches the random number
    const guess = Number(num)
    if (guess === random) console.log('Good Work')
    else console.log('Not Matched')
    console.log(`You guessed ${guess}. The number was: ${random}`)

    // Ask the user if they want to play again
    rl.question('Play again? (y/n): ', (answer) => {
      if (answer.trim().toLowerCase() === 'y') {
        play()
      } else {
        console.log('Thanks for playing!')

        // Close the readline interface and exit the program
        rl.close()
        process.exit(0)
      }
    })
  })
}

play()

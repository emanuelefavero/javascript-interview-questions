// RUN: node exercises/rock-paper-scissors.mjs

import inquirer from 'inquirer'

const choices = ['🪨 Rock', '📄 Paper', '✂ Scissors']

function play() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'chosen',
        message: 'What do you choose?',
        choices: choices,
      },
    ])
    .then((answers) => {
      const userChoice = answers.chosen
      console.log(`You chose ${userChoice}`)

      const computerChoice = choices[Math.floor(Math.random() * 3)]
      console.log(`Computer chose ${computerChoice}`)

      if (userChoice === computerChoice) {
        console.log('Its a tie 😑')
      } else if (
        (userChoice === '🪨 Rock' && computerChoice === '✂ Scissors') ||
        (userChoice === '📄 Paper' && computerChoice === '🪨 Rock') ||
        (userChoice === '✂ Scissors' && computerChoice === '📄 Paper')
      ) {
        console.log('You win! 🏆')
      } else {
        console.log('You lose! 😢')
      }

      setTimeout(() => {
        play()
      }, 2000)
    })
    .catch((error) => {
      console.error(error)
    })
}

play()

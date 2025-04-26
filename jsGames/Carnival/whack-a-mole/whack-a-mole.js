// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// define playing grid - ElementTags
// make mole - use image and make function
// use RandNum Gen to make it pop up randomly in the grid - import
// play sound when mole is hit - make function and loop for both
// add score - make function
// reset mole position - make function

// RandNum Generator
import { getRandomNumber } from './random-number'

// Game Grid Array
let moleGrid = document.getElementsByTagName('td')

// Make Mole
function moleMaker(i) {
  //console.log('appearing?', i)
  moleGrid[i].innerHTML = '<img src="./mole.png" id="mole">'
}
moleMaker(getRandomNumber(0, 24))

// Hit Mole
for (let i = 0; i < moleGrid.length; i++) {
  moleGrid[i].onclick = hitMole
}

function hitMole() {
  //console.log('hitting?')
  if (this.innerHTML === '<img src="./mole.png" id="mole">') {
    this.innerHTML = ''
    playSound()
    count++
    moleScore.innerHTML = 'Score: ' + count
    moleMaker(getRandomNumber(0, 24)) //THIS LINE!! Couldn't figure out why only 1 mole appeared and wouldn't regenerate
  }
}

// Hit Sound
let hitSound = document.createElement('audio')
hitSound.src = './whack-audio.wav'
hitSound.style.display = 'none'

function playSound() {
  hitSound.currentTime = 0
  hitSound.play()
}

// Score
let moleScore = document.getElementById('moleScore')
let count = 0
moleScore.innerHTML = 'Score: ' + count
//console.log(count)

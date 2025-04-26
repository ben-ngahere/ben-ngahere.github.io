// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// unicorns have multiple images - define array with images
// unicorns to change image on each click - define onclick and loop it to count images
// each unicorn to be independent of each other - array will define positions (0-3)
// confetti to appear when each unicorn is inflated - import JS from site https://cdn.skypack.dev/canvas-confetti

import Confetti from 'https://cdn.skypack.dev/canvas-confetti'

let uniPic = document.getElementsByTagName('img')
let uniPics = [
  './images/unicorn-0.png', //0
  './images/unicorn-1.png',
  './images/unicorn-2.png',
  './images/unicorn-3.png', //3
]

//let count = 0
let count = [0, 0, 0]

// Loop-Array
for (let i = 0; i < uniPic.length; i++) {
  uniPic[i].onclick = function (x) {
    uniChange(i, x) //, console.log('clicking?')
  }
}

// Image-Change
function uniChange(i, x) {
  let balloon = x.target
  if (count[i] === 0) {
    balloon.src = uniPics[1]
    //console.log('first change')
  } else if (count[i] === 1) {
    balloon.src = uniPics[2]
    //console.log('second change')
  } else if (count[i] === 2) {
    balloon.src = uniPics[3]
    //console.log('third change')
    Confetti()
  }
  count[i]++
}

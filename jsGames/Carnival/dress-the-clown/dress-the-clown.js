// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// head, body, shoes
// each section to be by key press - define function for each
// each section has 6 options - array for each
// selections to be performed by arrow keys - bind functions to keys
// up/down keys to select different parts
// left/right keys to cycle through options on each part

// Head
let headCount = 0
let headTotal = 6

function headChange() {
  let head = document.getElementById('head')
  head.src = './images/head' + headCount + '.png'
}

// Body
let bodyCount = 0
let bodyTotal = 6

function bodyChange() {
  let body = document.getElementById('body')
  body.src = './images/body' + bodyCount + '.png'
}

// Shoes
let shoesCount = 0
let shoesTotal = 6

function shoesChange() {
  let shoes = document.getElementById('shoes')
  shoes.src = './images/shoes' + shoesCount + '.png'
}

// Selector
let selectPart = 'head'
let parts = ['head', 'body', 'shoes']
let partCount = 0

document.addEventListener('keydown', function (event) {
  // Up
  if (event.key === 'ArrowUp') {
    partCount--
    if (partCount < 0) {
      partCount = parts.length - 1
    }
    selectPart = parts[partCount]
    document.getElementById('bodypart').innerHTML = selectPart //using this to show which body part you're on
    //console.log(selectPart)

    // Down
  } else if (event.key === 'ArrowDown') {
    partCount++
    if (partCount >= parts.length) {
      partCount = 0
    }
    selectPart = parts[partCount]
    document.getElementById('bodypart').innerHTML = selectPart
    //console.log(selectPart)

    // Left
  } else if (event.key === 'ArrowLeft') {
    if (selectPart === 'head') {
      headCount--
      if (headCount < 0) {
        headCount = headTotal - 1
      }
      headChange()
    } else if (selectPart === 'body') {
      bodyCount--
      if (bodyCount < 0) {
        bodyCount = bodyTotal - 1
      }
      bodyChange()
    } else if (selectPart === 'shoes') {
      shoesCount--
      if (shoesCount < 0) {
        shoesCount = shoesTotal - 1
      }
      shoesChange()
    }

    // Right
  } else if (event.key === 'ArrowRight') {
    if (selectPart === 'head') {
      headCount++
      if (headCount >= headTotal) {
        headCount = 0
      }
      headChange()
    } else if (selectPart === 'body') {
      bodyCount++
      if (bodyCount >= bodyTotal) {
        bodyCount = 0
      }
      bodyChange()
    } else if (selectPart === 'shoes') {
      shoesCount++
      if (shoesCount >= shoesTotal) {
        shoesCount = 0
      }
      shoesChange()
    }
  }
})

let startButton = document.getElementById('startBtn')

let moles = document.querySelectorAll('.mole')

let score = 0
//let counter = 0

let start = () => {
  moles.forEach((mole) => {
    mole.style.visibility = 'hidden'
  })
  let popOut = () => {
    const randomNum = Math.floor(Math.random() * moles.length)
    const randomMole = moles[randomNum]
    randomMole.style.visibility = ''
  }
  setInterval(popOut, 1000)
}
startButton.addEventListener('click', start)

moles.forEach((mole) => {
  let whac = () => {
    score += 10
    document.querySelector('h3').innerText = score
    checkForWinner()
  }
  mole.addEventListener('click', whac)
})
let checkForWinner = () => {
  if (score === 100) {
    document.querySelector('h1').innerText = 'WINNER'
  }
}
// if ((randomMole.style.visibility = '')) {
//   let popIn = () => {
//     randomMole.style.visibility = 'hidden'
//   }
//   setInterval(popIn, 1000)
// }

// counter++
// console.log(counter)
// if (counter === 3 && randomMole.style.visibility === "") {
//   randomMole.style.visibility = 'hidden'
//}

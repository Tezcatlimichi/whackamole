let startButton = document.getElementById('startBtn')
let restartButton = document.getElementById('restartBtn')
let moles = document.querySelectorAll('.mole')
let randomMole
let interval
let score = 0

let start = () => {
  moles.forEach((mole) => {
    mole.style.visibility = 'hidden'
  })
  let popOut = () => {
    let previousMole = randomMole
    if (previousMole) {
      previousMole.style.visibility = 'hidden'
    }
    const randomNum = Math.floor(Math.random() * moles.length)
    randomMole = moles[randomNum]
    randomMole.style.visibility = ''
  }
  interval = setInterval(popOut, 1000)
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
    clearInterval(interval)
    stop()
  }
}
const stop = () => {
  moles.forEach((mole) => {
    mole.style.visibility = ''
    document.querySelector('.gameboard').style.pointerEvents = 'none'
  })
}
restartButton.addEventListener('click', restart)

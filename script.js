let startButton = document.getElementById('startBtn')

let moles = document.querySelectorAll('.mole')

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

let startButton = document.getElementById('startBtn')

let moles = document.querySelectorAll('.mole')

let start = () => {
  moles.forEach((mole) => {
    mole.style.visibility = 'hidden'
  })
  console.log(moles)
}
startButton.addEventListener('click', start)

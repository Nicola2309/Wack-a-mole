const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

//funzione che toglie className e classList al .mole con la variabile che randomizza la posizione del mole(la foto) moltiplicata sui 9 quadrati in cui puo' apparire
 function randomSquare() {
     square.forEach(className => {
         className.classList.remove('mole')
     })
     let randomPosition = square[Math.floor(Math.random() * 9)]
     randomPosition.classList.add('mole')

//funzione che utilizzeremo in seguito, costruita per seconda, che assegna la hitPosition alla randomPosition scelta sopra. l'id nella variabile si riferisce al numero corrispondente del DIV in HTML
hitPosition = randomPosition.id
 }

 // funzione per il punteggio : mouseup--> al click del mouse succede(e la funzione di seguito): se l'ID clickato e' uguale alla hitPosition lo score aumenta di un punto. lo mostro sullo scermo tramite score.textContent = result, cioe' il text content(punteggio) viene mostrato nella barra del result.
 square.forEach(id => {
     id.addEventListener('mouseup', () => {
         if(id.id === hitPosition){
             result = result + 1
             score.textContent = result
             hitPosition = null
         }
     })
 })

// funzione che determina il timer di movimento del vecchietto
  function moveMole() {
      let timerId = null
      timerId = setInterval(randomSquare, 800)
  }

  moveMole()

// funzione per determinare countDown e alert con il risultato
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('IT iS OVER! Your final score is ' + result)
    }
}

let timerId = setInterval(countDown, 800)
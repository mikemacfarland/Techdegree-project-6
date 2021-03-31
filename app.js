
const qwerty = document.querySelector('#qwerty')
const phrase = document.querySelector('#phrase').querySelector('ul')
const reset = document.querySelector('.btn__reset')
const scoreBoard = document.getElementById('scoreboard').firstElementChild
const overlay = document.getElementById('overlay')

let correctGuesses = document.getElementsByClassName('show')
let LettersInPhrase = document.getElementsByClassName('letter')
let missed = 0

const phrases = [
    "im old gregg",
    "you know me",
    "youve seen me",
    "baileys in a shoe",
    "scaly man fish"
]

reset.addEventListener('click', () => {
    // remove overlay
    document.querySelector("#overlay").style.display = "none"
})

const getRandomPhraseAsArray = () => {
    //create variable to store random number
    const getRandomInt = () => {
        // a variable to store a function which creates a random number
        return Math.floor(Math.random() * Math.floor(5));
        }
    //pass getRandomInt function to index of phrases to output random phrase
    return phrases[getRandomInt()]
    //
}

//convert the random phrase to a collection of strings, store the collection in a variable
const phraseToGuess = [...getRandomPhraseAsArray()]

const addPhraseToDisplay = () => {
        // create a for loop that loops through the phrase and adds each character as an <li> element
        for (i = 0; i < phraseToGuess.length; i++) {
            const li = document.createElement('LI')
            li.textContent = (phraseToGuess[i])
            // if li is not equal to the string ' ' add class 'space'
            if (li.textContent === ' '){
                li.classList.add('space')
            }
            // if else add class 'letter'
            else{
                li.classList.add('letter')
            }
            // append list item containing letter or space to the Ul
            phrase.appendChild(li)
        }
}

//pass the phrase to addPhraseToDisplay to generate li items
addPhraseToDisplay(phraseToGuess)

const checkLetter = qwerty.addEventListener('click', (e) => {
    let match = null
    let li = phrase.getElementsByTagName('li')
    let tries = scoreboard
    for (let i = 0; i < li.length; i++){
        // for loop isnt reaching 2nd letter of same type ------
        if (e.target.textContent === li[i].textContent && (e.target.className !== "chosen" || "letter")){
            li[i].classList.add("show")
            e.target.className = "chosen"
            e.target.disabled = true
            match = e.target.textContent
            checkWin()
        }}
        if (match === null && e.target.tagName === "BUTTON" && e.target.className !== "chosen") {
            e.target.className = "chosen"
            e.target.disabled = true
            missed += 1
            scoreBoard.firstElementChild.remove()
            checkWin()
        }
        else {
            return
        }
        
    }
)

const checkWin = () => {
    title = document.querySelector('.title')
    if (correctGuesses.length === LettersInPhrase.length) {
        overlay.classList.add("win")
        title.textContent = "WIN!"
        reset.textContent = "Play Again"
        setTimeout(() => {overlay.style.display = 'flex'},1500)
        
        reset.addEventListener('click', (e) => {
            location.reload()
        })

    }
    if (missed > 4) {
        overlay.classList.add("lose")
        title.textContent = "LOSE!"
        reset.textContent = "Play Again"
        setTimeout(() => {overlay.style.display = 'flex'},1500)
        reset.addEventListener('click', (e) => {
            location.reload()
        })
    }
}
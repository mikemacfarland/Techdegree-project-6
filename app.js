
const qwerty = document.querySelector('#qwerty')
const phrase = document.querySelector('#phrase').querySelector('ul')
const reset = document.querySelector('.btn__reset')
const scoreBoard = document.getElementById('scoreboard').firstElementChild

let missed = 0

const phrases = [
    "fhrase one",
    "fhrase two",
    "fhrase three",
    "fhrase four",
    "fhrase five"
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
    const letterButtons = document.querySelector('.keyrow').getElementsByTagName('li')
    let match = null
    let li = phrase.getElementsByTagName('li')
    let tries = scoreboard
    for (let i = 0; i < li.length; i++){
        //if isnt looping into second word... fix this
        if (e.target.textContent === li[i].textContent && (e.target.className !== "chosen" || "letter")){
            li[i].classList.add("show")
            e.target.className = "chosen"
            match = e.target.textContent
            //console.log(match)
        }}
        // this if needed to be out of the previous statement because it would run when the loop was running through the first if statement
        if (match === null && e.target.tagName === "BUTTON" && e.target.className !== "chosen") {
            e.target.className = "chosen"
            missed += 1
            scoreBoard.firstElementChild.remove()
            //console.log(missed)
        }
        else {
            return console.log(match)
        }
        
    }
)




/// for win ------------------

// let correctGuesses = document.getElementsByClassName('show')
// let LettersInPhrase = document.getElementsByClassName('letter')

// const win = () => {
//     if (correctGuesses === LettersInPhrase) {
//         document.getElementById('overlay').classList.add('win')
//     }
// }

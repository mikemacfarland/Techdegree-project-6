
const qwerty = document.querySelector('#qwerty')
const phrase = document.querySelector('#phrase').querySelector('ul')
const reset = document.querySelector('.btn__reset')


let missed = 0

const phrases = [
    "phrase one",
    "phrase two",
    "phrase three",
    "phrase four",
    "phrase five"
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

// const checkLetter = () => {

// }


    



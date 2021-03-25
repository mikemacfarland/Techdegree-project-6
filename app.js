
const qwerty = document.querySelector('#qwerty')
const phrase = document.querySelector('#phrase')
const reset = document.querySelector('.btn__reset')

let missed = 0

const phrases = [
    "phrase 1",
    "phrase 2",
    "phrase 3",
    "phrase 4",
    "phrase 5"
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

const addPhraseToDisplay = () => {
    // ❏ Create a list li item
    const li = document.createElement('li')
    // ❏ Put the character inside of the list item
    li.textContent = getRandomPhraseAsArray()
    // ❏ Append that list item to the #phrase ul in your HTML
    phrase.appendChild(li)
    // ❏ If the character in the array is a letter and not a space, the
    // function should add the class “letter” to the list item. If not, add the “space” class.
}

addPhraseToDisplay()

const checkLetter = () => {

}


    



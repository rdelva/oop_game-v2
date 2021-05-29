/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phraseSet = [
            new Phrase('THIS IS SPARTA'),
            new Phrase('Nobody puts Baby in a corner'),
            new Phrase('My precious'),
            new Phrase('Rosebud'),
            new Phrase('Inconceivable'),
        ]
        return phraseSet;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length  - 1) + 1;
        return this.phrases[index];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.getElementById("overlay");
        const startButton = document.getElementById("btn__reset");

        startButton.addEventListener('click', (e) => {
            overlay.style.display = 'none'; 
        });

        this.getRandomPhrase().addPhraseToDisplay();
        this.activePhrase = this.getRandomPhrase(); 
    }

}// end Game Class


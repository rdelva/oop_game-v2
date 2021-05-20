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
    createPhrases(){
        const arrayOfPhrases = [
            'There is no trying',
            'You have to see the matrix for yourself',
            'Life is like a box of chocolates',
            'Bond. James Bond',
            'Show me the money!'
        ]

        return arrayOfPhrases;
    }

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
   getRandomPhrase() {
        let index = Math.floor(Math.random() * this.phrases.length - 1) + 1;
        return this.phrases[index];
    
    }

  

} 
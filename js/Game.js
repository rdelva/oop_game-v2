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
            'Jack of All Trades, Master of None',
            'Don’t Count Your Chickens Before They Hatch',
            'I\'m gonna make him an offer he can\'t refuse.',
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
        console.log(index);
    }

  

} 
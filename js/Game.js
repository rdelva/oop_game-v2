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
        
    }

}// end Game Class


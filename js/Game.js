/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = createPhrases();
        this.activePhrase = null;
    }

    /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

    createPhrases(){
        const phrases = [
            'Jack of All Trades, Master of None',
            'Don’t Count Your Chickens Before They Hatch',
            'I\'m gonna make him an offer he can\'t refuse.',
            'Bond. James Bond',
            'Show me the money!'
        ]

        return phrases;
    }

}
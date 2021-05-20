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

        const phrases = [
            new Phrase ('See the matrix for yourself'),
            new Phrase ('Life is like a box of chocolates'),
            new Phrase ('Bond. James Bond'),
            new Phrase ('Show me the money!'),
            new Phrase ('This is SPARTA!'),         
          
        ]

        return phrases;
    }
   
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
      /* getRandomPhrase() {
        let index = Math.floor(Math.random() * this.phrases.length - 1) + 1;
        return this.phrases[index];
    
    }

  */

} 
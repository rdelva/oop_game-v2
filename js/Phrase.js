/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseSection = document.getElementById("phrase");
        const ul = phraseSection.querySelector("ul");        
    
        for(let i  = 0; i < this.phrase.length; i++){
          
            if(this.phrase[i] !== " "){
                ul.innerHTML += `<li class="hide letter">${this.phrase[i]}</li>`;
            } else {
                ul.innerHTML += `<li class="space">${this.phrase[i]}</li>`;
            }
        }
        return this.phrase;
    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        console.log('Phrase chosen letter ' + letter);
        for(let i = 0; i < this.phrase.length; i++){
            if(this.phrase[i] == letter ){
                console.log(true);
                //showMatchedLetter(letter);
            } else {
                console.log(false);
                //game.removeLife();
            }
        }//end of for loop
    }


    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {

    }

}// end of Phrase class

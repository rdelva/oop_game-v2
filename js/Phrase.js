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
    }

}// end of Phrase class

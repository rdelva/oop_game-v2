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
            new Phrase('Just keep swimming'),
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
        overlay.style.display = 'none';    
        
        // this.getRandomPhrase().addPhraseToDisplay();
        // this.activePhrase = this.getRandomPhrase(); 

        const selectedPhrase = this.getRandomPhrase();
        this.activePhrase = selectedPhrase;
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase.phrase);
    }



    handleInteraction(){
        const qwerty = document.getElementById("qwerty");
        qwerty.addEventListener('click', (e) => {           

            if(e.target.tagName === 'BUTTON'){
                console.log(e.target.innerHTML);   
                e.target.classList.add('chosen');
                this.activePhrase.checkLetter(e.target.innerHTML);
            }
        }); // eventListner for keyboard
        
    }// end of handleInteraction()




    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {}

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        
        const scoreboard = document.querySelector("#scoreboard ol");
        const li = scoreboard.querySelector("li");
        const img = li.querySelector("img");
        console.log(img.src);        
        if(img.alt === 'Heart Icon'){           
            img.src = 'images/lostHeart.png';
            img.alt = 'Lost Heart'

        }
        const hearts = scoreboard.querySelectorAll('.tries [alt="Heart Icon"]');
       
      
        console.log(hearts);

        //console.log("Guessed Wrong");
        // if(wrongGuess){
        //     tries[counter]


        // }
        


        
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {};

}// end Game Class


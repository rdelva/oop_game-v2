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

        /** Removes the class win or lose after you press the start button */
        if(overlay.classList.contains('win') || overlay.classList.contains('lose') ){
            overlay.classList.remove('win');
            overlay.classList.remove('lose');    
        }
            
        
        let selectedPhrase = this.getRandomPhrase();
        this.activePhrase = selectedPhrase;
        this.activePhrase.addPhraseToDisplay();
    }


    handleInteraction(chosenLetter){


        const selectedPhrase = this.activePhrase.phrase.split("");
        let letter ="";
        

        if(chosenLetter.type =='click'){
            chosenLetter.target.setAttribute('disabled', 'disabled');      


           letter = chosenLetter.target.innerHTML;
           let letterCheck = this.activePhrase.checkLetter(letter);
           

            if(letterCheck){
                this.activePhrase.showMatchedLetter(letter);
            }

            const foundLetter = selectedPhrase.filter(selected => selected === letter);
          
            if(foundLetter.length == 0){
                chosenLetter.target.classList.add('chosen');
                chosenLetter.target.classList.add('wrong');
                let noHeart = this.removeLife();
                if(noHeart){
                    this.gameOver(false);
                }
            } else {
               chosenLetter.target.classList.add('chosen');
               //if checkForWin returns true, trigger gameOver() and win the game;
               let checkWin = this.checkForWin();               
               if(checkWin){
                this.gameOver(true);   
               }
            }            

    
        } else {           
            if(chosenLetter.type == 'keydown'){
                letter = chosenLetter.key;
         
                let letterCheck = this.activePhrase.checkLetter(letter);
                
                if(letterCheck){
                    this.activePhrase.showMatchedLetter(letter);
                }

                
                const keys = qwerty.querySelectorAll('.key');

           
                for(let i = 0;  i < keys.length; i++){
                    if(!keys[i].hasAttribute('disabled')){
                        if(letter === keys[i].innerHTML && letter != null) {
                            chosenLetter = keys[i].innerHTML;
                            keys[i].classList.add('chosen');
                            keys[i].setAttribute('disabled', 'disabled');
                            this.activePhrase.checkLetter(letter); 
        
                            //checks to see if the letter is in the phrase
                            const foundLetter = selectedPhrase.filter(selected => selected === letter);
        
                            if(foundLetter.length == 0){
                                keys[i].classList.add('wrong');

                                // if there are no hearts left. Set false value to gameOver to lose the game
                                let noHeart = this.removeLife();
                                if(noHeart){
                                    this.gameOver(false);
                                }
                            } else {
                                //this.checkForWin();
                                let checkWin = this.checkForWin();               
                                if(checkWin){
                                 this.gameOver(true);   
                                }
        
                            }    
        
                        } // end of if statement  

                    }
                          
                } // end of for loop 

                
            }
        }



        
    }// end of handleInteraction()


 



    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
  
    checkForWin() {
        //const letters = document.querySelectorAll('#phrase  li');        
        const letters = document.querySelectorAll('.letter');  
        //console.log(letters);
        let counter = 0;
        for(let i = 0; i < letters.length; i++){
           
            if(letters[i] !== "" ){                
                if(letters[i].classList.contains('show')){
                    counter++;
                }
            } else {
                counter++;
            }
        }
       
        if(counter === letters.length){
            //this.gameOver(true);
            //console.log(`You've won`);
            return true;
        }
       

    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
         
        const scoreboard = document.querySelector("#scoreboard ol");
        const li = scoreboard.querySelector("li");
        const tries = scoreboard.querySelectorAll('.tries img');
        this.missed++;
        //console.log(this.missed);
            
        for(let i = 0; i < this.missed; i++){
         
            if(tries[i].alt == 'Heart Icon' ){
                tries[i].src = 'images/lostHeart.png';
                tries[i].alt = 'Lost Heart';                            
            } 
        }

         if(this.missed === tries.length){             
             //this.gameOver(false);
             return true;
         } 
 
        
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById("overlay");
        const gameOverMesssage = document.getElementById("game-over-message");
        
        if(gameWon){
            overlay.style.display = 'flex';
            gameOverMesssage.innerHTML = `YOU WON!`;
            overlay.classList.add('win');
           
                       
        } else {
           overlay.style.display = 'flex';
            gameOverMesssage.innerHTML = `YOU LOSE!`; 
            overlay.classList.add('lose');                  

        }    
    }

    /** Resets the game the user wins or lose the game. 
     * This occurs when the user presses the start button
     * 
     */

    resetGame(){
         //RESET BOARD
         const phraseSection = document.getElementById("phrase");
         const ul = phraseSection.querySelector("ul");
         const letters = phraseSection.querySelectorAll("li");
        
         this.missed = 0;

         //remove all the list items within the Phrase Section
         for(let i = 0; i < letters.length; i++){
             ul.removeChild(letters[i]);
         }


         //Reset Keyboard
         const keys = document.querySelectorAll('.key');         
        
         for(let i = 0; i < keys.length; i++){
             if(keys[i].classList.contains("chosen")){
                 keys[i].classList.remove("chosen");               
                 keys[i].removeAttribute("disabled");
                 keys[i].classList.remove("wrong");
             } 
         }

         //Reset Lives
         const scoreboard = document.querySelector("#scoreboard ol");
         const tries = scoreboard.querySelectorAll('.tries img')
         this.missed = 0;
         
         for(let i = 0; i < tries.length; i++){
          
                 tries[i].src = 'images/liveHeart.png';
                 tries[i].alt = 'Heart Icon';            
         } 
     
    }// resetGame()
}// end Game Class


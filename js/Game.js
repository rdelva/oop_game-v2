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

        let selectedPhrase = this.getRandomPhrase();
        this.activePhrase = selectedPhrase;
        this.activePhrase.addPhraseToDisplay();
        //console.log(this.activePhrase.phrase);
    }



    handleInteraction(){
        const qwerty = document.getElementById("qwerty");
        console.log(this.activePhrase.phrase);
        const selectedPhrase = this.activePhrase.phrase.split("");
        console.log(selectedPhrase);
        let chosenLetter = '';
        // eventListner if someone plays the screen keyboard
        qwerty.addEventListener('click', (e) => {           

            if(e.target.tagName === 'BUTTON' ){
                chosenLetter = e.target.innerHTML;                
                this.activePhrase.checkLetter(e.target.innerHTML);
                const foundLetter = selectedPhrase.filter(selected => selected === chosenLetter);

                e.target.setAttribute('disabled', 'disabled');      


                if(foundLetter.length == 0){
                    e.target.classList.add('wrong');
                } else {
                    e.target.classList.add('chosen');
                }                                  

                //checks to see if the letter is in the phrase
                if(foundLetter.length == 0){
                    e.target.classList.add('wrong');
                    this.removeLife();
                }


            }
        }); 

        // if user selected letter from physical keyboard
        window.addEventListener('keyup', (e) => {
            const letter = e.key;            
            console.log(`pressed ${letter}`);
            const keys = qwerty.querySelectorAll('.key');
           
            console.log(keys);
            for(let i = 0;  i < keys.length; i++){
                if(letter === keys[i].innerHTML) {
                    chosenLetter = keys[i].innerHTML;
                    keys[i].classList.add('chosen');
                    keys[i].setAttribute('disabled', 'disabled');
                    this.activePhrase.checkLetter(letter); 

                    //checks to see if the letter is in the phrase
                    const foundLetter = selectedPhrase.filter(selected => selected === letter);

                    if(foundLetter.length == 0){
                        keys[i].classList.add('wrong');
                        this.removeLife();
                    }
                } // end of if statement          
            } // end of for loop    
         }); // end of keyup listener event  
       




        
    }// end of handleInteraction()


 



    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
  
    checkForWin() {
        
        const letters = document.querySelectorAll('#phrase  li');        

        let counter = 0;
        for(let i = 0; i < letters.length -1 ; i++){
           
            if(letters[i] !== "" ){                
                if(letters[i].classList.contains('show')){
                    counter++;
                }
            } else {
                counter++;
            }
        }
       
        if(counter === letters.length){
            this.gameOver(false);
            console.log(`You've won`);
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
        const img = li.querySelector("img");
        const tries = scoreboard.querySelectorAll('.tries img')
        const hearts = scoreboard.querySelectorAll('.tries [alt="Heart Icon"]');  
        
            
        for(let i = 0; i < tries.length; i++){
         
            if(tries[i].alt == 'Heart Icon' ){
                tries[i].src = 'images/lostHeart.png';
                tries[i].alt = 'Lost Heart';
                               
                break;
            } 
        }

        this.missed++;
        console.log(this.missed);

        // //this.missed equals the number of lost hearts

        // const lostHearts = scoreboard.querySelectorAll('.tries [alt="Lost Heart"]'); 
        // this.missed = lostHearts.length;


         if(this.missed === tries.length){
             console.log('Game Over');
             this.gameOver(true);

         } 
 
        
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById("overlay");
        const gameOverMesssage = document.getElementById("game-over-message")
        let text = "";
        if(gameWon){

            overlay.style.display = 'block';
            gameOverMesssage.innerHTML = `<h1>YOU LOSE!</h1>`;      
         
        } else {
            overlay.style.display = 'block';
            gameOverMesssage.innerHTML = `<h1>YOU WON!</h1>`;   
        }    // end of if statment


        
            //RESET BOARD
            const phraseSection = document.getElementById("phrase");
            const ul = phraseSection.querySelector("ul");
            const letters = phraseSection.querySelectorAll("li");
            this.phrases = null;
            this.activePhrase = null;
            this.missed = 0;

            //remove all the list items within the Phrase Section
            for(let i = 0; i < letters.length; i++){
                ul.removeChild(letters[i]);
            }


            //Reset Keyboard
            const qwerty = document.getElementById("qwerty");
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
            const li = scoreboard.querySelector("li");
            const img = li.querySelector("img");
            const tries = scoreboard.querySelectorAll('.tries img')
            const lostHearts = scoreboard.querySelectorAll('.tries [alt="Lost Icon"]');  
            this.missed = 0;
            
            for(let i = 0; i < tries.length; i++){
             
                    tries[i].src = 'images/liveHeart.png';
                    tries[i].alt = 'Heart Icon';            
            } 

    }

}// end Game Class


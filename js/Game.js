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
        qwerty.addEventListener('click', (e) => {           

            if(e.target.tagName === 'BUTTON'){
               // console.log(e.target.innerHTML);   
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
  
    checkForWin() {
        
        const letters = document.querySelectorAll('#phrase  .letter');        
        console.log(letters.length);

        let counter = 0;
        for(let i = 0; i < letters.length -1 ; i++){
           
            if(letters[i] !== "" ){                
                if(letters[i].classList.contains('show')){
                    counter++;
                }
            } 
            console.log(counter);
        }
       
        if(counter === letters.length - 1){
            this.gameOver(true);
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
        console.log(`${tries.length}  length`);
        //console.log(img.src); 
            
        for(let i = 0; i < tries.length; i++){
         
            if(tries[i].alt == 'Heart Icon' ){
                tries[i].src = 'images/lostHeart.png';
                tries[i].alt = 'Lost Heart';
                               
                break;
            } 
        }

        //this.missed equals the number of lost hearts

        const lostHearts = scoreboard.querySelectorAll('.tries [alt="Lost Heart"]'); 
        this.missed = lostHearts.length;

        console.log(this.missed);

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
            gameOverMesssage.innerHTML = `YOU LOSE!`;

            //RESET BOARD
            const phraseSection = document.getElementById("phrase");
            const letter  = phraseSection.querySelector(".letter");
            const ul = letter.parentNode;
            const letters = phraseSection.querySelectorAll(".letter");


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
            console.log(this.missed);   

            this.activePhrase = null;
        }

    }

}// end Game Class


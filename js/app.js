/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let  game = null;


// if you select the Start Button the  game will begin
const startButton = document.getElementById("btn__reset");
const overlay = document.querySelector('#overlay');

startButton.addEventListener('click', (e) => {

    //this is to reset the game after the first win or lost.
    if(overlay.classList.contains('win') || overlay.classList.contains('lose')){
        game.resetGame();
    }

    if(e.target.id === startButton.id){    
        game = new Game();
        game.startGame();        
    } 
}); //event Listner for start game

//User uses the mouse to enter value
const qwerty = document.getElementById("qwerty");
qwerty.addEventListener('click', (e) => {
    let chosenLetter = e;
                  
    if(chosenLetter.target.tagName === 'BUTTON' ){

        game.handleInteraction(chosenLetter);
    }
});


    
//User uses the keyboard to enter value
window.addEventListener('keydown', (e) => {
    //condition prevents the event from listening.
    if(overlay.style.display == 'none'){
        const pickLetter  = e;
        game.handleInteraction(pickLetter);
    }                       
});




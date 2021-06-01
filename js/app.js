/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



// if you select the Start Button the  game will begin
const startButton = document.getElementById("btn__reset");
window.addEventListener('click', (e) => {
    if(e.target.id === startButton.id){      
        const game = new Game();
        game.startGame();
        game.handleInteraction();
        //game.activePhrase.checkLetter('a');
    } 




}); //event Listner for start game




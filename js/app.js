/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();


// if you select the Start Button the  game will begin
const startButton = document.getElementById("btn__reset");
startButton.addEventListener('click', (e) => {
    if(e.target.id === startButton.id){    
        game.startGame();    
        //game.activePhrase.checkLetter('a');

        

    } 
}); //event Listner for start game


const qwerty = document.getElementById("qwerty");
qwerty.addEventListener('click', (e) => {
    let chosenLetter = '';
    chosenLetter = e.target.innerHTML;                
    if(e.target.tagName === 'BUTTON' )

    game.handleInteraction();


});

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
});



// Selects the entire screen keyboard
const qwerty  = document.getElementById("qwerty");


qwerty.addEventListener('click', (e) => {
    //chosenLetter = e.target; 

    if(e.target.tagName === 'BUTTON'){
        console.log(e.target.innerHTML);
        e.target.classList.add('chosen');
        game.handleInteraction(e.target.innerHTML);
    }


});
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let  game = null;


// if you select the Start Button the  game will begin
const startButton = document.getElementById("btn__reset");
startButton.addEventListener('click', (e) => {
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
    const pickLetter  = e;
    game.handleInteraction(pickLetter);
             

});



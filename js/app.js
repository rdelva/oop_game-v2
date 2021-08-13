/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */





// if you select the Start Button the  game will begin
const startButton = document.getElementById("btn__reset");
startButton.addEventListener('click', (e) => {
    console.log("1");
    if(e.target.id === startButton.id){    
        console.log("2");  

        const game = new Game();
        game.startGame();
        game.handleInteraction();
        //game.activePhrase.checkLetter('a');

        

    } 




}); //event Listner for start game




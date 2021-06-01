/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



// Helper Function
const start = (e) => {
   
    if(e.target.id == 'BUTTON'){
        console.log("HI");
        const game = new Game();
        game.startGame();
        game.handleInteraction();
        game.activePhrase.checkLetter('a');
    } 
}

window.addEventListener('click', start);


// if you select the keyboard on screen
// const keyboard = document.getElementById("qwerty");

// keyboard.addEventListener('click', (e) => {
//     if(e.target.tagName == 'BUTTON' ){
//         const chosenLetter = e.target.innerHTML;
//         e.target.classList.add("chosen");             
//     }
// }); 

/*
//if you use your own keyboard
window.addEventListener('keyup', (e) => {
    console.log();
    if(e.key == 'Enter' || e.key == 'Spacebar'){

    }
});*/
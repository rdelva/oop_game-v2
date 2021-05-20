/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//const phrase = new Phrase();
const game = new Game();

//const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);


game.phrases.forEach((phrase, index) => {
    const phraseString = new Phrase(phrase);
    console.log(`Phrase ${index} - phrase: ${phraseString.phrase}`);
})
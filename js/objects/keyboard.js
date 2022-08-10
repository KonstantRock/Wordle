import { YELLOW, GREEN, DARK_GRAY, LIGHT_GRAY } from '../constants/colors.js';

export const keyboard = {

   'guessedLetters': [],

   setNotChosen: function(selector) {
      selector.style.backgroundColor = LIGHT_GRAY;
   },

   setNoSuchLetter: function(selector) {
      selector.style.backgroundColor = DARK_GRAY;
   },

   setNotInPosition: function(selector) {
      selector.style.backgroundColor = YELLOW;
   },

   setGuessedLetter: function(selector) {
      selector.style.backgroundColor = GREEN;
   },

   colorKeyboard: function(currentWordArr, compareArrResult) {
      for(let i = 0; i < compareArrResult.length; i++) {
         const selector = document.querySelector(`.btn-${currentWordArr[i]}`);

         switch(true) {
            case compareArrResult[i] === 'wrong':
               this.setNoSuchLetter(selector);
               break;

            case compareArrResult[i] === 'miss':
               if(!this.guessedLetters.includes(currentWordArr[i])) {
                  this.setNotInPosition(selector);
               }
               break;

            case compareArrResult[i] === 'guess':
               this.setGuessedLetter(selector);

               if(!this.guessedLetters.includes(currentWordArr[i])) {
                  this.guessedLetters.push(currentWordArr[i]);
               }
               break;
         }
      }
   }
}
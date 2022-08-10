import {field} from './objects/field.js';
import {cell} from './objects/cell.js';
import {keyboard} from "./objects/keyboard.js";
import {targetWord} from './objects/targetWord.js';
import {setVocabulary} from './functions/setVocabulary.js';
import {compareArrs} from './functions/compareArrs.js';
import {checkWin} from "./functions/checkWin.js";
import {KEYBOARD_LETTER_KEYS, BUTTON, ENTER, BACKSPACE} from './constants/buttons.js';

// setSize задает размер сетки, Draw отрисовывает,
field.setSize(6, 5).draw(document.querySelector('.main__content'));

// случайно выбирает из массива слово, которое нужно угадать
const vocabulary = setVocabulary(field.cells);

// слово, которое требуется отгадать
const targetWordArr = targetWord.setWord(vocabulary).getLettersArr();
console.log(targetWordArr);

// массив с буквами текущего слова, введенного пользователем
let currentWordArr = [];

const arrOfCells = field.getAllSelectorsArr();

document.addEventListener('keyup', function(event) {
   // check if only letter buttons are pressed && word is not already guessed (popup-win is visible)
   if(
      KEYBOARD_LETTER_KEYS.includes(event.key.toLowerCase()) &&
      !document.querySelector('.popup-win').classList.contains('popup-visible')
   ) {
      let selector = document.querySelector(field.getCurrentCellSelector(arrOfCells));
      if (currentWordArr.length < field.cells) {
         while(selector.textContent !== '') {
            field.increaseCellNum();
            selector = document.querySelector(field.getCurrentCellSelector(arrOfCells));
            console.log(selector.textContent)
         }

         cell.setFilled(selector, event.key.toUpperCase());
         currentWordArr.push(event.key.toLowerCase());

         field.increaseCellNum();

         console.log(currentWordArr);
         // console.log(selector);
         console.log(field.currentCell)
      }

   } else if(event.key === 'Backspace') {
      let selector = document.querySelector(field.getCurrentCellSelector(arrOfCells));

      if (currentWordArr.length > 0) {
         while(selector.textContent === '') {
            field.decreaseCellNum();
            selector = document.querySelector(field.getCurrentCellSelector(arrOfCells));
         }

         cell.setEmpty(selector);
         currentWordArr.pop();
         field.decreaseCellNum();

         console.log(currentWordArr);
         console.log(selector);
      }

   } else if (event.key === 'Enter') {
      if (currentWordArr.length !== targetWordArr.length || !vocabulary.includes(currentWordArr.join(''))) {
         return // TODO: make animations for when word is not in vocabulary
      } else {
         const compareArrResult = compareArrs(targetWordArr, currentWordArr);
         const rowSelectorsArr = field.getCurrentRowSelectorsArr(arrOfCells);

         cell.colorCells(rowSelectorsArr, compareArrResult);

         keyboard.colorKeyboard(currentWordArr, compareArrResult);

         if(checkWin(currentWordArr, targetWordArr)) {
            document.querySelector('.popup-win').classList.add('popup-visible');
         }

         field.increaseRowNum();
         field.resetCellNum();
         currentWordArr = [];
      }
   }
});
//
// // слушатель для букв на клаве
// BUTTON.forEach(button => button.addEventListener('click', () => {
//    const selector = document.querySelector(field.getCurrentCellSelector(arrOfCells));
//
//    if (currentWordArr.length < field.cells) {
//       cell.setFilled(selector, button.textContent);
//       currentWordArr.push(button.textContent.toLowerCase());
//
//       console.log(currentWordArr);
//
//       field.increaseCellNum();
//    }
// }));
//
// // слушатель для backspace
// BACKSPACE.addEventListener('click', () => {
//    const selector = document.querySelector(field.getCurrentCellSelector(arrOfCells));
//
//    if(selector.textContent === '') {
//       field.decreaseCellNum();
//    }
//
//    if (currentWordArr.length > 0) {
//       cell.setEmpty(selector);
//       currentWordArr.pop();
//
//       console.log(currentWordArr);
//    }
// });
//
// // слушатель для enter
// ENTER.addEventListener('click', () => {
//    if (currentWordArr.length !== targetWordArr.length || !vocabulary.includes(currentWordArr.join(''))) {
//       return // TODO: make animations for when word is not in vocabulary
//    } else {
//       const keyArr = compareArrs(targetWordArr, currentWordArr);
//       const elementArr = field.getCurrentRowSelectorsArr(arrOfCells);
//
//       cell.colorCells(elementArr, keyArr);
//
//       console.log(keyArr);
//       console.log(elementArr);
//       console.log(arrOfCells);
//
//       field.increaseRowNum();
//       field.resetCellNum();
//       currentWordArr = []
//    }
// });

document.querySelector(`${'.popup__button-close' || '.popup__area-close'}`)
   .addEventListener('click', () => {
   document.querySelector('.popup-win').classList.remove('popup-visible');
});
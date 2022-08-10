import { BLACK, YELLOW, GREEN, DARK_GRAY } from '../constants/colors.js';

export const cell = {
  
  setEmpty: function(selector) {
    selector.textContent = '';
    selector.style.backgroundColor = BLACK;
    selector.style.borderColor = DARK_GRAY;
  },

  setFilled: function(selector, char) {
    selector.textContent = char;
    selector.style.backgroundColor = BLACK;
    selector.style.borderColor = DARK_GRAY;
  },

  setUnguessed: function(selector) {
    selector.style.backgroundColor = DARK_GRAY;
    selector.style.borderColor = DARK_GRAY;
  },

  setMissplaced: function(selector) {
    selector.style.backgroundColor = YELLOW;
    selector.style.borderColor = YELLOW;
  },

  setGuessed: function(selector) {
    selector.style.backgroundColor = GREEN;
    selector.style.borderColor = GREEN;
  },

  colorCells: function(rowSelectorsArr, compareArrResult) {
    for(let i = 0; i < compareArrResult.length; i++) {
      const selector = document.querySelector(rowSelectorsArr[i]);

      switch(true) {
        case compareArrResult[i] === 'wrong':
          this.setUnguessed(selector);
          break;

        case compareArrResult[i] === 'miss':
          this.setMissplaced(selector);
          break;

        case compareArrResult[i] === 'guess':
          this.setGuessed(selector);
          break;
      }
    }
  }
}  
import {getRndNum} from "../functions/helpers.js";

export const targetWord = {
   value: "",

   setWord: function (arr) {
      this.value = arr[getRndNum(0, arr.length - 1)];

      return this;
   },

   getLettersArr: function() {
      return this.value.split('');
   }
};

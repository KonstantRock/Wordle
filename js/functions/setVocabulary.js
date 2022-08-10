import { WORDS_5 } from "../constants/words5.js"

export function setVocabulary(wordLength) {
  switch(true) {
    case wordLength === 5:
      return(WORDS_5);
  }
}
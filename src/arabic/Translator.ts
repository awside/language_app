import { Dictionary } from "./Dictionary";

export class Translator {
  private wordsArray: Array<string> = []
  translatedWordsArray: Array<{ english: string, arabic: Array<string> }> = []

  constructor(words: string) {
    this.translate(words)
  }

  translate(words: string) {
    this.breakDownIntoWordsArray(words)
    this.translateUntilComplete()
  }

  private translateUntilComplete() {
    do {
    if (!this.translateForLengthOf(5)) {
      if (!this.translateForLengthOf(4)) {
        if (!this.translateForLengthOf(3)) {
          if (!this.translateForLengthOf(2)) {
            this.translateForLengthOf(1)
          }
        }
      }
    }
  } while (this.wordsArray.length > 0)
  }

  private breakDownIntoWordsArray(words: string) {
    this.wordsArray = words.split(' ')
  }

  private isEndingWord(word: string): boolean {
    if (word.endsWith('.') || word.endsWith('?') || word.endsWith('!')) {
      return true
    }
    return false
  }

  private translateForLengthOf(num: number): boolean {
    if (this.wordsArray.length < num) { return false }

    if (num > 1) {
      for (let i = 0; i < num-1; i++) {
        if (this.isEndingWord(this.wordsArray[i])) {
          return false
        }
      }
    }

    let word = ''
    for (let i = 0; i < num; i++) {
      word += `${this.wordsArray[i]} `
    }
    word = word.trimRight()

    let arabicWord = Dictionary.getArabic(word)
    if (!arabicWord) { 
      if (num == 1) {
        this.translatedWordsArray.push({ english: word + ' ', arabic: ['-----'] })
        this.wordsArray.shift()
        return true
      }
      return false 
    }

    let wordObj: {english: string, arabic: Array<string>} = { english: word, arabic: []}
    arabicWord.forEach(aWord => {
      wordObj.arabic.push(aWord)
    })
    this.translatedWordsArray.push(wordObj)
    for (let i = 0; i < num; i++) {
      this.wordsArray.shift()
    }
    
    return true
  }

}
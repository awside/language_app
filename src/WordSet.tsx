import React, { Component } from 'react'
import Emitter from './Emitter';
import randomColor from 'random-color'

type Props = {
  wordObj: { english: string, arabic: Array<string> }
}
export class WordSet extends Component<Props, any> {
  state: {
    backgroundColor: string,
    isWordUnknown: boolean
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      backgroundColor: randomColor(0.3, 0.99).hexString(),
      isWordUnknown: false
    }
    if (this.props.wordObj.arabic[0] == '-----') {
      this.state.isWordUnknown = true
    }
  }

  updateHeaderWord = (word?: string) => {
    if (word) {
      Emitter.emit('updateHeaderWord', word)
      return
    }
    let writtenWord = ''
    this.props.wordObj.arabic.forEach(aWord => {
      writtenWord += `${aWord} / `
    })
    Emitter.emit('updateHeaderWord', writtenWord.slice(0, writtenWord.length - 3))
  }

  onFocus = () => {
    this.setState({
      backgroundColor: 'white',
    })
    this.updateHeaderWord()
    let spokenWord = ''
    this.props.wordObj.arabic.forEach(aWord => {
      spokenWord += `${aWord}. `
    })
    var msg = new SpeechSynthesisUtterance();
    msg.text = spokenWord;
    msg.lang = 'ar-sa';
    // speechSynthesis.speak(msg);
    document.location.reload()
  }

  onBlur = () => {
    this.setState({
      backgroundColor: 'transparent',
    })
    this.updateHeaderWord(' ')
  }

  shouldLineBreak(): JSX.Element | null {
    let word = this.props.wordObj.english.trimRight()
    if (word.endsWith('.') || word.endsWith('?') || word.endsWith('!')) {
      return (<br />)
    }
    return null
  }

  render() {
    return (
      <span
        className="Word-Set"
        style={{
          backgroundColor: this.state.backgroundColor,
          fontWeight: (this.state.isWordUnknown) ? 'bold' : 'normal'
        }}
        tabIndex={-1}
        onFocus={this.onFocus}
        onBlur={this.onBlur}>
        {`${this.props.wordObj.english} `}
        {this.shouldLineBreak()}
      </span>
    )
  }

}
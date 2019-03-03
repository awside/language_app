import React, { Component } from 'react';
import { Translator } from './arabic/Translator';
import { WordSet } from './WordSet';
import nanoid from 'nanoid'

type Props = {
  title: string
  paragraph: string
}
export class WordBox extends Component<Props, any> {
  translator: Translator
  constructor(props: Props) {
    super(props)
    this.translator = new Translator(this.props.paragraph)
  }

  getWordSets(): Array<JSX.Element> {
    let wordSets: Array<JSX.Element> = []
    this.translator.translatedWordsArray.forEach(e => {
      wordSets.push(<WordSet key={nanoid()} wordObj={e} />)
    })
    return wordSets
  }

  render() {
    return (
      <div
        className="Word-Box"
      >
      <h5>{this.props.title}</h5>
        {this.getWordSets()}
      </div>
    )
  }

}
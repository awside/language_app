import React, { Component } from 'react'
import Emitter from './Emitter';

type Props = {
}
export class Header extends Component<Props, any> {
  state: {
    headerWord: string
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      headerWord: ''
    }
    Emitter.subscribe('updateHeaderWord', this.updateHeaderWord)
  }

  updateHeaderWord = (word: string) => {
    this.setState({
      headerWord: word
    })
  }

  render() {
    return (
      <div
        className="App-Header">
        <div
          style={{
            display: 'flex',
            height: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>Myo yo</div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 10,
          }}>
          <div
            style={{
              color: 'black',
              fontSize: '1.2em',
            }}>{this.state.headerWord}</div>
        </div>
      </div>
    )
  }

}
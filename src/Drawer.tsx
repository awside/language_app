import React, { Component } from 'react';
import anime from 'animejs';
import Emitter from './Emitter';

type Props = {
}
export class Drawer extends Component<Props, any> {
  constructor(props: Props) {
    super(props)

    Emitter.subscribe('openDrawer', this.open)
    Emitter.subscribe('closeDrawer', this.close)
  }

  open = () => {
    anime({
      targets: '.App-Drawer',
      translateX: '80vw',
      duration: 400,
      easing: 'easeInOutCirc'
    })
  }

  close = () => {
    anime({
      targets: '.App-Drawer',
      translateX: '-80vw',
      duration: 400,
      easing: 'easeInOutCirc'
    })
  }


  render() {
    return (
      <div
        className="App-Drawer"></div>
    )
  }

}


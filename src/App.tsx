import React, { Component } from 'react';
import { Drawer } from './Drawer'
import './App.scss';
import { Dictionary } from './arabic/Dictionary';
import { WordBox } from './WordBox';
import { Header } from './Header';
import { OPI } from './arabic/OPI';

Dictionary.load()

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Drawer />
        <div className="App-Container">
          <div className='App-Strip'>
            <WordBox title="FORTE" paragraph={OPI.forte1.text} />
            <div style={{ width: 10, height: 30 }} />
            <WordBox title="Weather" paragraph={OPI.weather.text} />
            <div style={{ width: 10, height: 30 }} />
            <WordBox title="Hobby" paragraph={OPI.hobby.text} />
            <div style={{ width: 10, height: 30 }} />
            <WordBox title="Daily Life" paragraph={OPI["daily-life"].text} />
            <div style={{ width: 10, height: 30 }} />
            <WordBox title="Daily Schedule" paragraph={OPI["daily-schedule"].text} />
            <div style={{ width: 10, height: 30 }} />
            <WordBox title="House" paragraph={OPI.house.text} />
            <div style={{ width: 10, height: 30 }} />
            <WordBox title="City" paragraph={OPI.city.text} />
            <div style={{ width: 10, height: 30 }} />
            <WordBox title="Travel" paragraph={OPI.travel.text} />
            <div style={{ width: 10, height: 30 }} />
            <WordBox title="Resturant" paragraph={OPI.resturant.text} />
            <div style={{ width: 10, height: 30 }} />
            <WordBox title="Resturant" paragraph={OPI.car.text} />
            <div style={{ width: 10, height: '80vh' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;


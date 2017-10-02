import React, { Component } from 'react';
// import './App.css';
import StylistInfo from './components/stylist-info';
import InputData from './input-data';

class App extends Component {
  render() {
    return (
      <div>
        <StylistInfo inputData={InputData}></StylistInfo>
      </div>
    );
  }
}

export default App;

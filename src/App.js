import React, { Component } from 'react';
// import './App.css';
import StylistInfo from './components/stylist-info';
import InputData from './input-data';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="background">
          <div className="stylist-info-wrapper">
            <StylistInfo inputData={InputData}></StylistInfo>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

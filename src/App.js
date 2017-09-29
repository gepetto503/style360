import React, { Component } from 'react';
import './App.css';
import StylistInfo from './components/stylist-info';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="background">
          <div className="stylist-info-wrapper">
            <StylistInfo></StylistInfo>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

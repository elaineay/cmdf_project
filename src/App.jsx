import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Add from './components/Add';
import Find from './components/Find';
import SimpleMap from './components/SimpleMap';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
        <div className="App">
        <Header/>
            <header className="App-header">
            <Add/>
            </header>
            <body>
              something
              </body>
      </div>
    );
  }
}

export default App;

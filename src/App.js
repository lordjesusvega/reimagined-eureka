import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
  render () {
    return (
      <>
        <Nav />
        <Header />
        <About />
      </>
    );
  }
}

export default App;

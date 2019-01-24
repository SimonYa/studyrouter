import React, { Component } from 'react';
import './App.css';
import AuthRouter from './modules/auth/AuthRouter';

class App extends Component {
  
  render() {
    return (
      <AuthRouter />
    );
  }
}

export default App;

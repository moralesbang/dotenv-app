import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import runtimeEnv from '@mars/heroku-js-runtime-env';

class App extends Component {
  render() {
    
    const env = runtimeEnv();
    const author = env.REACT_APP_AUTHOR;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            Created by {author}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

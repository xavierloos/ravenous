import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Business from '../Business/Business';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/ravenous_favicon.ico' className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ravenous
        </a>
        <Business />
      </header>
    </div>
  );
}

export default App;

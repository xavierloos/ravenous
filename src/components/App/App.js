import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearcBar from '../SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearcBar />
      <BusinessList />
    </div>
  );
}

export default App;

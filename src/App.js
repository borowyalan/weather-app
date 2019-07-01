import React from 'react';
import logo from './logo.svg';
import './App.css';
import Geolocation from './Geolocation';

function App() {

  

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Weather App
        </p>
        <div className="App-link">
          <Geolocation />
        </div>
      </header>
    </div>
  );
}

export default App;

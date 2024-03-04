import React, { useState, useEffect } from 'react';
import './App.css';
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TypeAnimation
          sequence={[
            'Hi,',
            1000,
            'Hi, I am Jean-Mochel',
            500,
            'Hi, I am Jean-Michel Alturk.',
            1000
          ]}
          wrapper="span"
          speed={50}
          cursor={true}
          style={{ fontSize: '2em', fontFamily: 'Courier New', display: 'inline-block' }}
          repeat={0}
        />
        <br /> {/* This will create a new line */}
        <TypeAnimation
          sequence={[
            5000,
            'A Software Engineer',
            1000
          ]}
          wrapper="span"
          speed={50}
          cursor={false} 
          style={{ fontSize: '1em', fontFamily: 'Courier New', display: 'inline-block' }}
          repeat={0}
        />
      </header>
    </div>
  );
}

export default App;

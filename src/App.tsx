import React from 'react';

import './normalize.css';
import './App.css';

function App() {
  const x = {
    name: 'dfsdf',
    surname: 32,
  };

  function bruh(y: { name: string; surname: number }): boolean {
    let varr = false;
    const mur = {
      z: y,
      rand: Math.random(),
    };

    if (mur.rand < 32) {
      varr = true;
      return varr;
    }

    return true;
  }

  return <div className="App" />;
}

export default App;

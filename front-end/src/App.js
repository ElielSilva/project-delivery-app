import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
// import './App.css';
// import rockGlass from './images/rockGlass.svg';

function App() {
  return (
  // <div className="App">
  //   <span className="logo">TRYBE</span>
  //   <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
  //     Glass
  //   </object>
  // </div>
    <div>

      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/login" element={ <Login /> } />
      </Routes>
    </div>
    // <h1>ELIEL</h1>
  );
}

export default App;

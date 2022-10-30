import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Costumer from './pages/Costumer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" replace /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer" element={ <Costumer /> } />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Costumer from './pages/Costumer';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerCheckout from './pages/CustomerCheckout';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" replace /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer" element={ <Costumer /> } />
        <Route exact path="/customer/checkout" element={ <CustomerCheckout /> } />
      </Routes>
    </div>
  );
}

export default App;
